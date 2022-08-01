console.log('Starting up');
'use strict'

$(document).ready(init)


function init() {
    renderProjects()
    $('.btn-submit').click(onSubmitClick)
}

function renderProjects() {
    var strHTMLs = gProjects.map(project =>

        `
        <div class="col-md-4 col-sm-6 portfolio-item" data-projId=${project.id}>
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.imgSrc}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
      `

    )
    $('.portfolio-list').html(strHTMLs.join(''))
    $('.portfolio-link').each(function (index, element) { $(element).click({ projectId: gProjects[index].id }, onModalClick) })


}

function addInfoToModals(id) {

    var currProjArr = gProjects.filter(project => project.id === id)
    var currProj = currProjArr[0]


    var HTMLs =
        `
        <h2>${currProj.name}</h2>
        <p class="item-intro text-muted">${currProj.title}.</p>
        <img class="img-fluid d-block mx-auto" src="${currProj.imgSrc}" alt="">
        <p class="decsription">${currProj.desc}. dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere</p>
        <ul class="list-inline">
          <li>Date: ${currProj.publishedAt}</li>
          <li>Client: Window</li>
          <li>Category:&nbsp;&nbsp;${currProj.labels.join(',&nbsp;&nbsp;')}</li>
        </ul>
        <a href="${currProj.url}"target="_blank"class="btn btn-primary">Visit</a>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
            Close Project</button>
        `


    $(`.portfolio-modal .modal-body`).html(HTMLs)

}


function onModalClick(ev) {
    var projData = ev.data
    var id = projData.projectId

    addInfoToModals(id)
}

function onSubmitClick(ev){
  ev.preventDefault()

  const mailAddr = $('#mailInputForm').val()
  const subject = $('#subjectInputForm').val()
  const mailBody = $('#textInputForm').val()
  const strMail =
  `https://mail.google.com/mail/?view=cm&fs=1&to=ris.benichou@gmail.com&su=${subject}&body=From: ${mailAddr}
      Massage: ${mailBody}`

  window.open(`${strMail}`, '_blank')

  clearDetails()
  console.log('done:')
}


function clearDetails() {
  $('#mailInputForm').val('')
  $('#subjectInputForm').val('')
  $('#textInputForm').val('')
}