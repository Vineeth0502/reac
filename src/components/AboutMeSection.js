import React from 'react';

const AboutMeSection = () => {
  const openModal = () => {
    document.getElementById('myModal').classList.remove('hidden');
  };

  const closeModal = () => {
    document.getElementById('myModal').classList.add('hidden');
  };

  return (
    <section className="aboutme">
      <div className="left-section">
        <div className="profile-picture cursor-pointer" onClick={openModal}>
          <img
            src="pics/vineeth.jpg"
            alt="Vineeth Ketham"
            className="rounded-full"
          />
        </div>
      </div>

      <div id="aboutme" className="right-section ml-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">About Me</h2>
        <p className="text-gray-700">
          Greetings! I am Vineeth Ketham, a dedicated software developer currently pursuing a Master's in Computer Science at Saint Louis University. With a proven track record in envisioning, coding, and managing cutting-edge software systems, I bring a wealth of experience to the table. During my internships at DizitalZap and ThePaperBrains in Hyderabad, India, I honed my skills in designing user-friendly WordPress websites and developing innovative solutions as a Full Stack Developer. My diverse project portfolio includes the creation of an AI model for a virtual assistant and an Android-based chat application using Firebase. Beyond the realm of technology, I find joy in playing cricket, a sport that not only fuels my competitive spirit but also emphasizes teamwork—a quality I seamlessly integrate into my professional pursuits. With a passion for staying at the forefront of technological advancements and a commitment to delivering exceptional results, I am excited about the endless possibilities in the dynamic field of software development.
        </p>

        <div id="myModal" className="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="modal-content cloud-background p-6 bg-white rounded-lg w-1/2 m-auto mt-20">
            <span className="close text-white cursor-pointer" onClick={closeModal}>
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Passion</h2>
            <p>Full-stack Developer</p>
            <p className="text-gray-700">
              I am a dedicated Computer Science enthusiast pursuing a Master's degree at Saint Louis University after completing my Bachelor's degree at Nalla Malla Reddy Engineering College. As a Junior Associate Software Engineer at DizitalZap, I played a pivotal role in the success of the "KAIRA" project, leading to a 25% increase in user engagement and a 33% rise in customer purchases through optimized WordPress websites. As an Intern Full Stack Developer at ThePaperBrains, I creatively crafted various web solutions like "Viitjee," "Vintage Retreat," and "thepaperbrains," showcasing my versatility. I also developed the "LEO - Virtual Assistant," utilizing Python and advanced speech recognition to create a personalized AI model. Proficient in Java, Python, and JavaScript, with expertise in tools like Visual Studio and Android Studio, I am poised to drive innovation in Computer Science by combining academic knowledge with practical experience.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Hobbies</h2>
            <p>Playing Cricket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
