
const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

function loadData(){
    const mainElement = document.querySelector('.milestone');

    mainElement.innerHTML = `${milestoneData.map(
        function(value){
          return  `<div class="item">
                    <!-- milstine -->
                    <div class="list">
                        <div><input type="checkbox" name="item"></div>
                        <p onclick='show(this, ${value._id})'>
                            ${value.name}
                            <i class="fa-solid fa-angle-down"></i>
                        </p>
                    </div>
                    <!-- Hidden item -->
                    <div class="hidden-item">
                        ${value.modules.map(function(module){
                        return `<div class="sub-item">
                                        <p style="text-align: left;">${module.name}</p>
                                 </div>`;
                        }).join("")}
                    </div>
                </div>`
        }
    ).join("")}`
}
loadData();

    function show(element, id){
        const parent = element.parentElement;
        const sibling = parent.nextElementSibling;
        const show  = document.querySelector('.show');
        if(!sibling.classList.contains('show') && show)
        show.classList.remove('show')
        sibling.classList.toggle('show'); 
        shown(id);
    }
    function shown(id){
        const thumbnail = document.querySelector('.thumbnailImage');
        const title = document.querySelector('.title');
        const Discriptopn = document.querySelector('.Discriptopn');
        thumbnail.src = milestoneData[id].image;
        title.innerHTML = milestoneData[id].name;
        Discriptopn.innerHTML = milestoneData[id].description;
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