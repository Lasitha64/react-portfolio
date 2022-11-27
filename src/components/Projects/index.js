import './index.scss'

const Projects = () => {
  return (
    <div className="container about-page">
      <div className="text-zone-project">
        <h1 className="h1-card">My Projects</h1>
        <div class="card" style={{ marginTop: '10%', marginBottom: '5%' }}>
          <div class="photo">
            <img src="data:image/png;base64,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" />
          </div>
          <div class="description">
            <h2 className="h2-card">Online Voting System</h2>
            <h4 className="h4-card">HTML, CSS, JS, PHP</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Develop a online voting system as a team project with three team
              members.
            </p>
            <p className="p-card">
              Manage the pull requests in github repository and design the user
              registration and voting sections in the project.{' '}
              <a href="https://github.com/Lasitha64/OVS">(Github)</a>
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '30%' }}>
          <div class="photo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEA_JBvSPi9yQ5zmuftR3qZXnHhzJmutON60o94RZkW_oU6uxTiTbH4qIFZu9HeMDhY8&usqp=CAU" />
          </div>
          <div class="description">
            <h2 className="h2-card">Online Spare Part management System</h2>
            <h4 className="h4-card">Java Servlets & My SQL Workbrench</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Develop a opline spare part management system to buy products
              using application with other two members.
            </p>
            <p className="p-card">
              manage the implementation in product catogories and user cart.
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '52%' }}>
          <div class="photo">
            <img src="data:image/png;base64,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" />
          </div>
          <div class="description">
            <h2 className="h2-card">Online Food delivery System</h2>
            <h4 className="h4-card">Android studio, Java and Firebase</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Develop an andorid application to food delivery system using
              android stuido, project was done as a group with four members.
            </p>
            <p className="p-card">
              Design the user registration and login with user cart and
              available products recycler views, order and payment methods.
              <a href="https://github.com/Lasitha64/RALK">Github</a>
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '74%' }}>
          <div class="photo">
            <img src="data:image/png;base64,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" />
          </div>
          <div class="description">
            <h2 className="h2-card">
              Metal Crusher Spare Part Management System
            </h2>
            <h4 className="h4-card">Java FX, MongoDB</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Design a dekstop application for a client to maintain vehicle
              details and spare part details in metal crusher site. This project
              was done as a group with 6 members.
            </p>
            <p className="p-card">
              Design the metal crusher CRUD operations in the system.
              <a href="https://github.com/Lasitha64/demo6">Github</a>
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '96%' }}>
          <div class="photo">
            <img src="data:image/png;base64,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" />
          </div>
          <div class="description">
            <h2 className="h2-card">Covid Information System UI/UX Design</h2>
            <h4 className="h4-card">Figma</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Design a prototype application using Figma by following UI/UX
              design principals and gets hands on experience in UI/UX designing.
            </p>
            <p className="p-card">
              This project was done as a team and I lead the team and help other
              members when needed.
              <a href="https://www.figma.com/file/PE47ufMvEt93NJDx5QOUrA/Highfidelity-Prototypes?node-id=355%3A3127&t=4ciTAPC2dqfQagRK-1">
                Figma
              </a>
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '118%' }}>
          <div class="photo">
            <img src="data:image/jpeg;base64,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faHm6HCpGDjgTgcF0muBFQajeMUFBy9o2hYUdsKNWJLOODaksc2uJhk+Q4bv/VekhOsjQmR4ZvMe0Oad4IqOCrLXlasH5PDlqtdFMQPoCC5jQCDXdWoHcphq5lXQ7NlWPBDrl6h2BznOb6nBBTtoMm3W5MiSddj8o+6TdyoL3lAjJSWJY2kkUXHzAa04Eh7GGnFjarVsD/M0f6cX+UK70FeaC6tmSb/lMd/LTGNDToMJzIri536xVhosE3MshsMSI5rGNFS5xAaB2koM6o/W986ynCH/AFVc0jPQ4zBEhPa9hycwhzT3hUzre+dZThD/AKqC64sJrmlrgC1wLSDiCCKEEblRjw+wbUvCplI3E9AnL6TCe8cVfCjOnWjLZ+VdBNBEb0obj+a8DLgcj9yCKa7orXSEJ7SHNdEa5pGIILSQR2UUu1ffNsp9Sz2KhZ+3nmzzZkcERJeL0a5huIc0/RNe4q+tX3zbKfUs9iCsNc0APtOVhurdexjDTOjorgaduKk35F5D/Vmv34X/AFqPa3T/APWkvowv6zlc4mGec3xCCJ6LavJWQjGYgvjOeWmHSK5jm0JBODWA16I2qZLDy7Dheb4hZkFca8vm5v17P5Xrv6tvmuU+r/5OXA15fNzfr2fyvXf1bfNcp9X/AMnIJQiIgIiIC51uSL48vEgMick57SwPpeu1wJu1FcK7V0UQQ/QHQptmsiN5XlXRHAl1y5RoFA2l520k5qYIiAoBNau62kLThTPJm+15Zyd4ONKPF++KBwrs2qfoghOnWr+HaLmxDFdDiMbcBADmkVri00OZ2EKGjVLPN6LLRAZxit/hBI9auhEFaaO6pYEGII8zFMy8G9RwusrvcCSX95p2Kyl9RBBrP0C5O032n8ovX3PdydylLwp5d/GnBTlEQFwNMrA+XSj5W/cLi0h1KgFrg4VG0YLvogiugGips6XdAdE5RznmI4gUaCWtbQA7KNC0NL9Afl01BmvlHJ8kGi7yd+9dfe8q+KbsipyiAiIgrrTTVhDno/ylkbkHOFHjk74eRgHeW2hpgc60CmWj1mfJpaDLXr/JMDL1Lt6gzpU08V00QQDTzV2bRjsj/KeSuMEOnJ360c51a3208r1KO/kYidZP/wBp3/arhRBVVk6pnwY8OMbQc8Q3tddMMi9Q1pXlTTwVqoiCNacaMc4SwluV5Kj2vvXb+QcKXbw87OuxdDRuyfkstClb9/k23b127exJrdqaZ711UQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=" />
          </div>
          <div class="description">
            <h2 className="h2-card">Online Resavation System</h2>
            <h4 className="h4-card">Asp.net, JQuery, AJAX</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Design a simple single page reservation web application usiing
              AJAX , JQuery with .Net as an individual project.
            </p>
            <p className="p-card">
              Users can reserve bookings for available suits and admin can add
              more suits, two users can't reserve same suits same day.
              <a href="https://github.com/Lasitha64/ASP_Web">Github</a>
            </p>
          </div>
        </div>
        <div class="card" style={{ marginTop: '140%' }}>
          <div class="photo">
            <img src="https://static.javatpoint.com/csharp/images/c-sharp.png" />
          </div>
          <div class="description">
            <h2 className="h2-card">.Net Projects</h2>
            <h4 className="h4-card">C#, .Net, ASP.Net</h4>
            <p style={{ marginTop: 10 }} className="p-card">
              Few projects that i implemented in my campus journey
            </p>
            <p className="p-card">
              Include entity frameworks, image upload with asp.net web
              framework, distributed architecture with several tiers.
              <a href="https://github.com/Lasitha64/dotnet-entity--framework">
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
