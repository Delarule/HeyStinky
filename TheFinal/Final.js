const input = document.querySelector("#fileInput"); 
    const output = document.querySelector("#output"); 
    input.addEventListener("change", (e) => { 
        const file = e.target.files[0]; 
        const isImage = file.type.startsWith("image/");  
        if (isImage) { 
            const reader = new FileReader(); 
            reader.onloadend = () => { output.src = reader.result; }; 
            reader.readAsDataURL(file); } 
            else { alert("Please select a valid image file."); }
             });