// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((res) => {
//     let data = res;
//     data.map((item) => {
//         console.log(`${item.id} ${item.title}`);
//         // console.log(item);
//         document.getElementById("para").innerHTML=item.title

//     })

//   });

const get = document.getElementById("get");
const post = document.getElementById("post");
const put = document.getElementById("put");
const patch = document.getElementById("patch");
const del = document.getElementById("delete");

const url = "https://jsonplaceholder.typicode.com/todos";
const postUrl = "https://jsonplaceholder.typicode.com/posts/";
const result = document.getElementById("table");
const alerts = document.getElementById("warning");

const getPost = async () => {
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    alert(err);
  }
};

get.addEventListener("click", () => {
  const myPosts = async () => {
    const posts = await getPost();
    let html = "";

    // console.log(post.title);

    if (posts) {
      const table = `<table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
      ${posts
        .map(
          ({ id, title, completed } = {}) =>
            `<tr>
        <th scope="row">${id}</th>
        <td>${title}</td>
        <td>${completed}</td>
        </tr>`
        )
        .join("\n")}
       
      </tbody>
    </table>`;
      // html +=table;

      console.log(posts);
      result.innerHTML = table;
    } else {
      alerts.innerHTML = "bad response !";
    }
  };
  myPosts();
});

const postData = async (newpost) => {
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newpost),
    });
    if (response.status != 201) {
      throw new Error(response.status);
    } else {
      const created_post = await response.json();
      return created_post;
    }
  } catch (err) {
    alert(err);
  }
};

post.addEventListener("click", async () => {
  const newPosts = {
    id: 10001,
    title: "This is new Posts",
    complete: false,
  };
  const createdPost = await postData(newPosts);
  console.log(createdPost);
});

const putData = async (updatepost, id) => {
  try {
    const response = await fetch(`${postUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatepost),
    });
    if (response.status != 200) {
      throw new Error(response.status);
    } else {
      const update_post = await response.json();
      return update_post;
    }
  } catch (err) {
    alert(err);
  }
};



const patchData = async (updatepost, id) => {
  try {
    const response = await fetch(`${postUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatepost),
    });
    if (response.status != 200) {
      throw new Error(response.status);
    } else {
      const patch_post = await response.json();
      return patch_post;
    }
  } catch (err) {
    alert(err);
  }
};

put.addEventListener("click", async() => {
  const updatedData= {
    id: 2,
    title: "This is new Posts",
    complete: true,
  };
  const update_post = await putData(updatedData, 2);
  const {id,title,completed}={}=update_post;
  alert(`id:${id} ${title} ${completed}`);
  console.log(update_post);
});
patch.addEventListener("click", async() => {
  const patchdData= {
    title: "This is patch data",
  };
  const patch_post = await putData(patchdData, 2);
  const {id,title,completed ={}}=patch_post;
  alert(`id:${id} ${title} ${completed}`);
  console.log(patch_post);
});
// del.addEventListener("click", () => {
//   alert("delete working");
// });
