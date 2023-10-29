let booksLists = document.querySelector(".add-books");
let seemorebtn= document.querySelectorAll(".see-more");

// giving the book list name on left side
async function addbooklists() {
  let url = await fetch(
    "https://books-backend.p.goit.global/books/category-list"
  );
  let data = await url.json();
  data.forEach(ele => {
    // console.log(ele);
    addbooksname(ele);
  });
}
addbooklists();

function addbooksname(result) {
  // console.log(result);
  let li = document.createElement("li");
  li.innerHTML = result.list_name;
  // console.log(li);
  booksLists.appendChild(li);
}

// appending the books in the right container

async function addbookstoright() {
  let url = await fetch("https://books-backend.p.goit.global/books/top-books");
  let data = await url.json();
  // console.log(data);
  data.forEach(ele => {
    let booksContainer = document.createElement("div");
    booksContainer.classList.add("books-container");
    // console.log(ele.list_name);
    let heading = document.createElement("h4");
    heading.innerText = ele.list_name;
    booksContainer.appendChild(heading);
    addbooksinside(ele, booksContainer);
  });
}
addbookstoright();



function addbooksinside(res, booksContainer) {
  let booksUl = document.createElement("ul");
  booksUl.classList.add("books-ul");
  //    console.log(res);
  res.books.forEach(ele => {
    // console.log(ele);
    let bookLi = document.createElement("li");
    bookLi.classList.add("book");
    bookLi.innerHTML = `
     <img src="${ele.book_image}" alt="">
                    <h5>${ele.title}</h5>
                    <p>${ele.publisher}</p>
     `;
    booksUl.appendChild(bookLi);

    //  console.log(booksUl)
  });

  // final append

  booksContainer.appendChild(booksUl);
  let seebtn = document.createElement("button");
  seebtn.classList.add("see-more");
  seebtn.innerText = "See More";
  booksContainer.appendChild(seebtn);
  seemorebtn= document.querySelectorAll(".see-more");
  document.querySelector(".right-container").appendChild(booksContainer);
  // console.log(booksContainer)
}
console.log(seemorebtn); 


seemorebtn.forEach(() => {
    
    seemorebtn.addEventListener("click", function() {
        // console.log(btn);
        let parent = seemorebtn.target.parentElement;
        let firstChild = parent.children[0];
        console.log(firstChild);
    });
});
