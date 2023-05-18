import { useState } from "react"


function ABout(props) {

    // const [style, setStyle] = useState({
    //     // color: 'white',
    //     // backgroundColor: 'black',
    //     // border: "1.5px solid white"
    // })

    let Mystyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
      
      
    };
    
    
  return (
    <div className='container' >
        <h2 className='my-3 text-center'> About Us </h2>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={Mystyle}>
        <strong>Welcome to AnalyzeYourText.com!</strong> With our collapsible option, you can organize and structure your content effectively. Our platform offers powerful text analysis tools, including word frequency counts, readability assessments, and sentiment analysis. Gain insights into your writing style and evaluate the emotional tone of your text. Customize the appearance of your content and collaborate with others for real-time feedback. Unleash the potential of your words at <code>AnalyzeYourText.com.</code>
          
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Exploring Accordion Bodies: Unleashing Hidden Content</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={Mystyle}>
      <strong>This is the second item's accordion body.</strong> It is hidden by default until the collapse plugin adds the appropriate classNames that we use to style each element. These classNames control the overall appearance, as well as the showing and hiding via CSS transitions. You have the flexibility to modify any of this with custom CSS or by overriding our default variables. It's worth noting that the <code>.accordion-body</code> can contain almost any HTML, although the transition does limit overflow. Discover the power of hidden content with accordion bodies and unlock new possibilities for dynamic web design.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Harnessing the Potential of Accordion Bodies: Unveiling Hidden Content</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={Mystyle}>
      <strong>This is the second item's accordion body.</strong> It remains concealed by default until the collapse plugin incorporates the appropriate classNames, which we employ to style each element. These classNames govern the overall appearance and control the visibility through CSS transitions. You possess the flexibility to modify any of these aspects using custom CSS or by overriding our default variables. It is important to note that the <code>.accordion-body</code> can accommodate nearly any HTML content, although the transition may restrict overflow. Embark on an exploration of the power of hidden content with accordion bodies, and unlock fresh possibilities for dynamic web design.
      </div>
    </div>
  </div>

  <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <strong>The Benefits of Text Utils: Streamline Your Workflow</strong>
    </button>
  </h2>
  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={Mystyle}>
      As a professional or student, your workflow can become overwhelmed with tasks such as formatting, word count, and readability checks. Text Utils can streamline your process by providing tools that assist with these tasks. Our platform includes a wide range of features, including a text editor, character count, word count, and more. Utilizing these tools will help you <code>achieve greater</code> efficiency and accuracy in your work, allowing you to focus on the content rather than the mechanics. Try Text Utils today and experience a more streamlined workflow.
    </div>
  </div>
</div>


<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <strong>Enhancing User Experience with Interactive Accordions</strong>
    </button>
  </h2>
  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={Mystyle}>
      <strong>Unlock the power of interactive accordions</strong> and take your website's user experience to new heights. By implementing collapsible sections, you can neatly organize and present your content. The collapse plugin seamlessly adds functionality to hide or reveal sections, providing a clean and intuitive browsing experience. With customizable styles and CSS options, you have full control over the appearance and behavior of your accordions. <code>Dive into the world</code> of interactive accordions and engage your audience with dynamic and interactive web design.
    </div>
  </div>
</div>



</div>

    </div>
  )
}

export default ABout