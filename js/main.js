const mainData = JSON.parse(data).data;

    function mileStone(){
        const mileStoneList = document.querySelector('.milestone');
        mileStoneList.innerHTML = `${mainData.map(function(value){
            return `<div class="item" id='${value._id}'>
                    <!-- milstine -->
                    <div class="list">
                        <div><input type="checkbox" name="item" onclick="changlist(this, ${value._id})"></div>
                        <p  onclick="shown(this, ${value._id})">
                            ${value.name}
                            <i class="fa-solid fa-angle-down"></i>
                        </p>
                    </div> 
                    <!-- Hidden item -->
                    <div class="hidden-item">
                        <div class="sub-item">
                                ${value.modules.map(function(value){
                                    return `<p> ${value.name}</p>`
                                }).join("")}
                        </div>
                    </div>
                </div>`
        }).join("")}`
    }
    mileStone();

    function shown(element, id){
        const hiddenElement = element.parentElement.nextElementSibling;
        const show = document.querySelector('.show');
        const thumbnail = document.querySelector('.thumbnailImage');
        if(!hiddenElement.classList.contains('show') && show){
            show.classList.remove('show');
        }
        hiddenElement.classList.toggle('show');  
        imageHandaling(id); 
    }

    function imageHandaling(id){
        const thumbnail = document.querySelector('.thumbnailImage');
        const title = document.querySelector('.title');
        const Discriptopn = document.querySelector('.Discriptopn');
        thumbnail.src = mainData[id].image;
        thumbnail.style.opacity = '0';
        title.innerText = mainData[id].name;
        Discriptopn.innerText = mainData[id].description;
    }
    document.querySelector('.thumbnailImage').onload = function(){
        this.style.opacity = '1';   
    };
        

    function changlist(check, id){
        const milestone = document.querySelector('.milestone');
        const singleMileStone = document.querySelector('.item');
        const doneList = document.querySelector('.doneList');
        const item = document.getElementById(id);
                console.log(item);
                if(check.checked){
                    milestone.removeChild(item);
                    doneList.appendChild(item);
                    // singleMileStone.remove(id);
                    // doneList.appendChild(item);
                }else{
                    item.remove();
                    milestone.appendChild(item)
                                        // milestone.appendChild(item);
                    // doneList.remove(item);
                }
        // }else{
        //     milestone.appendChild(currentItem);
        //     doneList.remove(currentItem);
        // }
    }




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
