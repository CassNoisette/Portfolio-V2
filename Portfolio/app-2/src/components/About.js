import React from 'react';


function About(){
    return (
        <section>
            <div className='flex-row justify-center vw100'>
                <h1 className='text-center vw100 mb-2'>About Me</h1>
                <div>
                <img class="profile-picture" src={require("../../images/image2.jpg.")} alt="profile-pic" />
<p>
As a kid, I dreamed about being my own boss. I pursued an education in bioengineer, which landed me a job in
      biotech company. Although, it is a rewarding job, I can't shake the feeling that I can definitely do more. Hence
      why I join a coding bootcamp to make my dream as a female entrepreneur a reality. As they say, the future is
      female!
</p>
                </div>
            </div>
        </section>
    )
}

export default About;