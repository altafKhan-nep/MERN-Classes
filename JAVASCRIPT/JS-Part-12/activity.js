// let btn = document.querySelector("#btn");
// let url = "http://universities.hipolabs.com/search?name=";


// btn.addEventListener("click",async ()=>{
//     let country = document.querySelector("input").value;  
//     console.log(country);
//     let colArr = await getCollege(country);
//     console.log(colArr);
//     show(colArr);
// })
// function show(colArr){
//     let list = document.querySelector("#list");

//     for(col of colArr){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
   


// }
// async function getCollege(country){
//     try{
//         let res = await axios.get(url + country);
//         return res.data
//     }catch(e){
//         console.log("err",e);
//         return [];
//     }
// }



/////////////////with name of states


let btn = document.querySelector("#btn");
        let url = "http://universities.hipolabs.com/search?country=India"; // Fetch all Indian colleges

        btn.addEventListener("click", async () => {
            let state = document.querySelector("#state").value.trim().toLowerCase();
            
            if (!state) {
                alert("Please enter a state name.");
                return;
            }

            let colArr = await getColleges(state);
            console.log(colArr);
            show(colArr);
        });

        function show(colArr) {
            let list = document.querySelector("#list");
            list.innerHTML = ""; // Clear previous results

            if (colArr.length === 0) {
                list.innerHTML = "<li>No colleges found</li>";
                return;
            }

            for (let col of colArr) {
                let li = document.createElement("li");
                li.innerText = col.name;
                list.appendChild(li);
            }
        }

        async function getColleges(state) {
            try {
                let res = await axios.get(url);
                let allColleges = res.data;

                // Filter based on state name (case insensitive)
                let filteredColleges = allColleges.filter(col => 
                    col["state-province"] && col["state-province"].toLowerCase() === state
                );

                return filteredColleges;
            } catch (e) {
                console.log("Error fetching data:", e);
                return [];
            }
        }