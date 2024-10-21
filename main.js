$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev">&lt;</button>',  
        nextArrow: '<button type="button" class="slick-next">&gt;</button>',  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


var modal = document.getElementById("resumeModal");
var btn1 = document.getElementById("openModal"); 
var btn2 = document.querySelector(".btnOne"); 
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('.confirm-btn').addEventListener('click', function() {
    const selectedValue = document.querySelector('input[name="s"]:checked');
    if (selectedValue) {
        let targetPage = '';

        if (selectedValue.id === 'dynamic') {
            targetPage = 'pages/dynamic-resume.html';
        } else if (selectedValue.id === 'editable') {
            targetPage = 'pages/editable-resume.html';
        } else if (selectedValue.id === 'sharable') {
            targetPage = 'pages/shareable.html';
        }
        window.location.href = targetPage;
    }
});

const resumeModal = document.getElementById('resumeModal');
const templateModal = document.getElementById('templateModal');
const openModalButtons = document.querySelectorAll('#openModal');
const closeButtons = document.querySelectorAll('.close');
const confirmButton = document.querySelector('.confirm-btn');
 
let selectedResumeType = '';

openModalButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    resumeModal.style.display = 'block';
  })
);

 
closeButtons.forEach((closeBtn) =>
  closeBtn.addEventListener('click', () => {
    resumeModal.style.display = 'none';
    templateModal.style.display = 'none';
  })
);

confirmButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="s"]:checked');
  if (selectedOption) {
    selectedResumeType = selectedOption.id;
    resumeModal.style.display = 'none';
    templateModal.style.display = 'block';
  } else {
    alert('Please select a resume type!');
  }
});

function startResumeBuilder(template) {
  console.log(`Selected Resume Type: ${selectedResumeType}`);
  console.log(`Selected Template: ${template}`);

  window.location.href = `resume-input.html?type=${selectedResumeType}&template=${template}`;
}

