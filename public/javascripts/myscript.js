fetch("http://localhost:3000/filenames")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var maindiv = document.getElementById("main");
    console.log(`maindiv is ${maindiv}`);
    if (data.length == 0) {
      var para = document.createElement("p");
      para.innerHTML = "There are no images in the public/images folder.";
      maindiv.append(para);
    } else {
      console.log(`the length of the array is ${data.length}`);
      data.forEach((filename) => {
        console.log(`filename is ${filename}`);
        var imageElement = document.createElement("img");
        imageElement.src = `http://localhost:3000/images/${filename}`;
        maindiv.append(imageElement);
      });
    }
  });
