const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//     const link = document.createElement("a");
//     const file = "./index.html"
//     link.href = `${file}`;
//     link.download = `${file}`;

//     document.body.appendChild(link);
//     link.click();
//     link.remove();
// })
//   const saveButton = document.getElementById("myButton");

//   saveButton.addEventListener("click", async () => {
//     try {
//       const response = await fetch("script.js");

//       if (!response.ok) {
//         throw new Error("Could not load script.js");
//       }

//       const fileData = await response.blob();

//       const fileHandle = await window.showSaveFilePicker({
//         suggestedName: "script.js",
//         types: [
//           {
//             description: "JavaScript file",
//             accept: {
//               "text/javascript": [".js"]
//             }
//           }
//         ]
//       });

//       const writable = await fileHandle.createWritable();
//       await writable.write(fileData);
//       await writable.close();

//       console.log("File saved");
//     } catch (error) {
//       if (error.name !== "AbortError") {
//         console.error("Save failed:", error);
//       }
//     }
//   });

  document.getElementById('myButton').addEventListener("click", async () => {
      try {
        const response = await fetch("./script.js");

        if (!response.ok) {
          throw new Error(`Download failed: ${response.status}`);
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "script.js";

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    });