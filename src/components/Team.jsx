import React from 'react'

const Team = () => {
  return (
    <div className="team" id='Team'>
    <h1 className="title">Our<span>Team</span></h1>

    <div className="team_box">
        <div className="profile">
            <img src="/image/chef1.png" />

            <div className="info">
                <h2 className="name">Chef 1</h2>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src="/image/chef2.png" />

            <div className="info">
                <h2 className="name">Chef 2</h2>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src="/image/chef3.jpg" />

            <div className="info">
                <h2 className="name">Chef 3</h2>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src="/image/chef4.jpg" />

            <div className="info">
                <h2 className="name">Chef 4</h2>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

    </div>

</div>
  )
}

export default Team