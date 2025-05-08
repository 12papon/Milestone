const mainData = JSON.parse(data).data;
console.log(mainData);

    function mileStone(){
        const mileStoneList = document.querySelector('.milestone');
        mileStoneList.innerHTML = `${mainData.map(function(value){
            return `<div class="item">
                    <!-- milstine -->
                    <div class="list">
                        <div><input type="checkbox" name="item"></div>
                        <p>
                            ${value.name}
                            <i class="fa-solid fa-angle-down"></i>
                        </p>
                    </div> 
                    <!-- Hidden item -->
                    <div class="hidden-item">
                        <div class="sub-item">
                                ${value.modules.map(function(value){
                                    return `   <p> ${value.name}  </p>`
                                }).join("")}
                        </div>
                    </div>
                </div>`
        }).join("")}`
    }
    mileStone();


const nnn = `<div class="item">
                    <!-- milstine -->
                    <div class="list">
                        <div><input type="checkbox" name="item"></div>
                        <p>
                            Mailstone 1 name
                            <i class="fa-solid fa-angle-down"></i>
                        </p>
                    </div> 
                    <!-- Hidden item -->
                    <div class="hidden-item">
                        <div class="sub-item">
                            <p>
                                Hallo
                            </p>
                        </div>
                    </div>
                </div>`
// const milestoneData = JSON.parse(data).data;
// console.log(milestoneData);

// function loadData(){
//     const mainElement = document.querySelector('.milestone');

//     mainElement.innerHTML = `${milestoneData.map(
//         function(value){
//           return  `<div class="item" id='${value._id}'>
//                     <!-- milstine -->
//                     <div class="list">
//                         <div><input onclick="done(this, ${value._id})" type="checkbox" name="item"></div>
//                         <p onclick='show(this, ${value._id})'>
//                             ${value.name}
//                             <i class="fa-solid fa-angle-down"></i>
//                         </p>
//                     </div>
//                     <!-- Hidden item -->
//                     <div class="hidden-item">
//                         ${value.modules.map(function(module){
//                         return `<div class="sub-item">
//                                         <p style="text-align: left;">${module.name}</p>
//                                  </div>`;
//                         }).join("")}
//                     </div>
//                 </div>`
//         }
//     ).join("")}`
// }
// loadData();

//     function show(element, id){
//         const parent = element.parentElement;
//         const sibling = parent.nextElementSibling;
//         const show  = document.querySelector('.show');
//         if(!sibling.classList.contains('show') && show)
//         show.classList.remove('show')
//         sibling.classList.toggle('show'); 
//         shown(id);
//     }
//     function shown(id){
//         const thumbnail = document.querySelector('.thumbnailImage');
//         const title = document.querySelector('.title');
//         const Discriptopn = document.querySelector('.Discriptopn');
//         thumbnail.style.opacity = "0"
//         thumbnail.src = milestoneData[id].image;
//         title.innerHTML = milestoneData[id].name;
//         Discriptopn.innerHTML = milestoneData[id].description;
//     }
//     const thumbnail = document.querySelector('.thumbnailImage');
//         thumbnail.onload = function(){
//         thumbnail.style.opacity = "1";
//     }

//     function done(checkbox, id){
//         const singleMileStone = document.querySelector('.item');
//         const doneList = document.querySelector('.doneList');
//         const item = document.getElementById(id);
//         console.log(item);
//         if(checkbox.checked){
//             singleMileStone.remove(id);
//             doneList.appendChild(item);
//         }else{

//         }
        
//     }
