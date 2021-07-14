const users = [
    {
      createdAt: "2021-07-08T16:03:21.350Z",
      name: "Dr. Armando Wilkinson",
      avatar: "https://cdn.fakercloud.com/avatars/safrankov_128.jpg",
      id: "1"
    },
    {
      createdAt: "2021-07-08T08:57:12.518Z",
      name: "Stephanie Rogahn",
      avatar: "https://cdn.fakercloud.com/avatars/Shriiiiimp_128.jpg",
      id: "2"
    },
    {
      createdAt: "2021-07-09T01:12:29.377Z",
      name: "Claude Collins",
      avatar: "https://cdn.fakercloud.com/avatars/kimcool_128.jpg",
      id: "3"
    },
    {
      createdAt: "2021-07-09T00:05:02.016Z",
      name: "Lisa Erdman",
      avatar: "https://cdn.fakercloud.com/avatars/johncafazza_128.jpg",
      id: "4"
    },
    {
      createdAt: "2021-07-08T10:04:17.740Z",
      name: "Nellie Gorczany",
      avatar: "https://cdn.fakercloud.com/avatars/iduuck_128.jpg",
      id: "5"
    },
    {
      createdAt: "2021-07-09T05:17:52.657Z",
      name: "Cristina Oberbrunner",
      avatar: "https://cdn.fakercloud.com/avatars/vaughanmoffitt_128.jpg",
      id: "6"
    },
    {
      createdAt: "2021-07-08T19:05:11.867Z",
      name: "Ernest Adams",
      avatar: "https://cdn.fakercloud.com/avatars/marcobarbosa_128.jpg",
      id: "7"
    },
    {
      createdAt: "2021-07-08T16:50:23.231Z",
      name: "Preston Carroll",
      avatar: "https://cdn.fakercloud.com/avatars/jnmnrd_128.jpg",
      id: "8"
    },
    {
      createdAt: "2021-07-08T18:52:56.658Z",
      name: "Roderick Kerluke I",
      avatar: "https://cdn.fakercloud.com/avatars/instalox_128.jpg",
      id: "9"
    },
    {
      createdAt: "2021-07-08T15:29:47.213Z",
      name: "Ernestine Kling",
      avatar: "https://cdn.fakercloud.com/avatars/jesseddy_128.jpg",
      id: "10"
    },
    {
      createdAt: "2021-07-09T06:08:38.593Z",
      name: "Ida Fahey",
      avatar: "https://cdn.fakercloud.com/avatars/jarsen_128.jpg",
      id: "11"
    },
    {
      createdAt: "2021-07-09T05:23:39.814Z",
      name: "Lorene McCullough",
      avatar: "https://cdn.fakercloud.com/avatars/dnirmal_128.jpg",
      id: "12"
    },
    {
      createdAt: "2021-07-08T21:53:26.640Z",
      name: "Mrs. Jacquelyn Weissnat",
      avatar: "https://cdn.fakercloud.com/avatars/fotomagin_128.jpg",
      id: "13"
    }
  ];
  
  const userList = document.createElement("div");
  //console.log(userList);
  users.forEach((user) => {
    const person = document.createElement("div");
    person.className = "person-container";
    person.innerHTML = `
    <img class="person-image" src=${user.avatar} alt="user_avatar"></img>
    <div class="person-text">
    <h3>${user.name}</h3>
    <p>${new Date(user.createdAt).toDateString()}</p>
    </div>`;
    userList.append(person);
  });
  userList.className = "fulllist";
  document.body.append(userList);
  