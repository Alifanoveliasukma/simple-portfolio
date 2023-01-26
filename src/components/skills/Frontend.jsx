import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>HTML</h3>
                        <span className="skills__lever">basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>CSS</h3>
                        <span className="skills__lever">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className="skills__lever">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills_group">
            <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>Bootstrap</h3>
                        <span className="skills__lever">Intermediet</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>Git</h3>
                        <span className="skills__lever">Basic</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills__name'>React</h3>
                        <span className="skills__lever">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend