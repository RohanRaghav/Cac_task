import React, { useEffect, useRef } from 'react';

const Cac = ({ id, onInView }) => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              onInView(id);
            }
          });
        },
        {
          threshold: 0.1, // Adjust this value as needed
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [id, onInView]);
  
  /*  useEffect(() => {
        const dots = document.querySelectorAll('.circle-dota');
        const addAnimation = () => {
          dots.forEach(dot => dot.classList.add('animate'));
        };
    
        const removeAnimation = () => {
          dots.forEach(dot => dot.classList.remove('animate'));
        };
    
        dots.forEach(dot => {
          dot.addEventListener('mouseover', addAnimation);
          dot.addEventListener('mouseout', removeAnimation);
        });
    
        return () => {
          dots.forEach(dot => {
            dot.removeEventListener('mouseover', addAnimation);
            dot.removeEventListener('mouseout', removeAnimation);
          });
        };
      }, []);
       useEffect(() => {
    const dots = document.querySelectorAll('.circle-dot');
    const addAnimation = () => {
      dots.forEach(dot => dot.classList.add('animate'));
    };

    const removeAnimation = () => {
      dots.forEach(dot => dot.classList.remove('animate'));
    };

    dots.forEach(dot => {
      dot.addEventListener('mouseover', addAnimation);
      dot.addEventListener('mouseout', removeAnimation);
    });

    return () => {
      dots.forEach(dot => {
        dot.removeEventListener('mouseover', addAnimation);
        dot.removeEventListener('mouseout', removeAnimation);
      });
    };
  }, []);
*/
  return (
    <>
    <div id="Home" className='Home' style={{position:'absolute',top:-30}}>
        <div className="Connecting" style={{position:'relative',left:-300,display:'flex' }}>
            <div>
            <span className="circle-dota" style={{left:405,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:430,position:'relative',top:145}}></span>
            <span className="circle-dota" style={{left:380,position:'relative',top:165}}></span>
            <span className="circle-dota" style={{left:358,position:'relative',top:235}}></span>
            <span className="circle-dota" style={{left:363,position:'relative',top:250}}></span>
            <span className="circle-dota" style={{left:380,position:'relative',top:145}}></span>
            <span className="circle-dota" style={{left:352,position:'relative',top:252}}></span>
            </div>
            <div style={{position:'relative',left:-60}}>
            <span className="circle-dota" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:432,position:'relative',top:152}}></span>
            <span className="circle-dota" style={{left:445,position:'relative',top:152}}></span>
            <span className="circle-dota" style={{left:460,position:'relative',top:152}}></span>
            <span className="circle-dota" style={{left:438,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:418,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:365,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:310,position:'relative',top:245}}></span>
            </div>
            <div style={{position:'relative',left:-100}}>
            <span className="circle-dota" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:432,position:'relative',top:150}}></span>
            <span className="circle-dota" style={{left:410,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:420,position:'relative',top:190}}></span>
            <span className="circle-dota" style={{left:430,position:'relative',top:225}}></span>
            <span className="circle-dota" style={{left:439,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:420,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:401,position:'relative',top:150}}></span>
            </div>
            <div style={{position:'relative',left:-120}}>
            <span className="circle-dota" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:432,position:'relative',top:150}}></span>
            <span className="circle-dota" style={{left:410,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:420,position:'relative',top:190}}></span>
            <span className="circle-dota" style={{left:430,position:'relative',top:225}}></span>
            <span className="circle-dota" style={{left:439,position:'relative',top:245}}></span>
            <span className="circle-dota" style={{left:420,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:401,position:'relative',top:150}}></span>
            </div>
            <div style={{position:'relative',left:-175}}>
            <span className="circle-dota" style={{left:548,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:501,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:431,position:'relative',top:175}}></span>
            <span className="circle-dota" style={{left:412,position:'relative',top:148}}></span>
            <span className="circle-dota" style={{left:424,position:'relative',top:148}}></span>
            <span className="circle-dota" style={{left:432,position:'relative',top:148}}></span>
            <span className="circle-dota" style={{left:350,position:'relative',top:250}}></span>
            <span className="circle-dota" style={{left:330,position:'relative',top:225}}></span>
            <span className="circle-dota" style={{left:340,position:'relative',top:250}}></span>
            <span className="circle-dota" style={{left:350,position:'relative',top:250}}></span>
            </div>
            <div style={{position:'relative',left:-205}}>
            <span className="circle-dota" style={{left:405,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:430,position:'relative',top:145}}></span>
            <span className="circle-dota" style={{left:380,position:'relative',top:160}}></span>
            <span className="circle-dota" style={{left:358,position:'relative',top:235}}></span>
            <span className="circle-dot" style={{left:363,position:'relative',top:250}}></span>
            <span className="circle-dot" style={{left:380,position:'relative',top:148}}></span>
            <span className="circle-dot" style={{left:352,position:'relative',top:250}}></span>
            </div>
            <div style={{position:'relative',left:-170,top:5}}>
            <span className="circle-dot" style={{left:405,position:'relative',top:195}}></span>
            <span className="circle-dot" style={{left:386,position:'relative',top:170}}></span>
            <span className="circle-dot" style={{left:367,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:377,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:297,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:250,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:344,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:265,position:'relative',top:220}}></span>
            <span className="circle-dot" style={{left:245,position:'relative',top:243}}></span>
            </div>
            <div style={{position:'relative',left:-225,top:5}}>
            <span className="circle-dot" style={{left:405,position:'relative',top:195}}></span>
            <span className="circle-dot" style={{left:386,position:'relative',top:170}}></span>
            <span className="circle-dot" style={{left:367,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:377,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:297,position:'relative',top:142}}></span>
            <span className="circle-dot" style={{left:305,position:'relative',top:220}}></span>
            <span className="circle-dot" style={{left:285,position:'relative',top:243}}></span>
            <span className="circle-dot" style={{left:238,position:'relative',top:243}}></span>
            <span className="circle-dot" style={{left:275,position:'relative',top:243}}></span>
            </div>
            <div style={{position:'relative',left:-375}}>
            <span className="circle-dot" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:432,position:'relative',top:150}}></span>
            <span className="circle-dot" style={{left:410,position:'relative',top:245}}></span>
            <span className="circle-dot" style={{left:420,position:'relative',top:190}}></span>
            <span className="circle-dot" style={{left:430,position:'relative',top:225}}></span>
            <span className="circle-dot" style={{left:439,position:'relative',top:245}}></span>
            <span className="circle-dot" style={{left:420,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:401,position:'relative',top:150}}></span>
            </div>
            </div>
            <div style={{position:'relative',left:800}}>
            <span className="circle-dot" style={{left:450,position:'relative',top:175}}></span>
            <span className="circle-dot" style={{left:430,position:'relative',top:150}}></span>
            <span className="circle-dot" style={{left:430,position:'relative',top:130}}></span>
            <span className="circle-dot" style={{left:435,position:'relative',top:115}}></span>
            <span className="circle-dot" style={{left:445,position:'relative',top:115}}></span>
            <span className="circle-dot" style={{left:405,position:'relative',top:175}}></span>
            <span className="circle-dot" style={{left:410,position:'relative',top:175}}></span>
            <span className="circle-dot" style={{left:390,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:360,position:'relative',top:225}}></span>
            <span className="circle-dot" style={{left:315,position:'relative',top:228}}></span>
            <span className="circle-dot" style={{left:270,position:'relative',top:220}}></span>
            <span className="circle-dot" style={{left:235,position:'relative',top:200}}></span>
            </div>
            <div className='All' style={{display:'flex', top:100,position:'relative', left:170}}>
                <div>
                <span className="circle-dota" style={{left:450,position:'relative',top:175}}></span>
                <span className="circle-dota" style={{left:400,position:'relative',top:175}}></span>
                <span className="circle-dota" style={{left:370,position:'relative',top:210}}></span>
                <span className="circle-dota" style={{left:340,position:'relative',top:250}}></span>
                <span className="circle-dota" style={{left:310,position:'relative',top:285}}></span>
                <span className="circle-dota" style={{left:280,position:'relative',top:320}}></span>
                <span className="circle-dota" style={{left:313,position:'relative',top:250}}></span>
                <span className="circle-dota" style={{left:340,position:'relative',top:175}}></span>
                <span className="circle-dota" style={{left:302,position:'relative',top:250}}></span>
                <span className="circle-dota" style={{left:308,position:'relative',top:210}}></span>
                <span className="circle-dot" style={{left:295,position:'relative',top:250}}></span>
                <span className="circle-dot" style={{left:280,position:'relative',top:285}}></span>
                <span className="circle-dot" style={{left:265,position:'relative',top:320}}></span>
                </div>
                <div>
                <span className="circle-dot" style={{left:310,position:'relative',top:175}}></span>
                <span className="circle-dot" style={{left:290,position:'relative',top:205}}></span>
                <span className="circle-dot" style={{left:270,position:'relative',top:235}}></span>
                <span className="circle-dot" style={{left:250,position:'relative',top:265}}></span>
                <span className="circle-dot" style={{left:230,position:'relative',top:295}}></span>
                <span className="circle-dot" style={{left:210,position:'relative',top:325}}></span>
                <span className="circle-dot" style={{left:220,position:'relative',top:325}}></span>
                <span className="circle-dot" style={{left:230,position:'relative',top:325}}></span>
                </div>
                <div style={{position:'relative',left:-40}}>
                <span className="circle-dot" style={{left:310,position:'relative',top:175}}></span>
                <span className="circle-dot" style={{left:290,position:'relative',top:205}}></span>
                <span className="circle-dot" style={{left:270,position:'relative',top:235}}></span>
                <span className="circle-dot" style={{left:250,position:'relative',top:265}}></span>
                <span className="circle-dot" style={{left:230,position:'relative',top:295}}></span>
                <span className="circle-dot" style={{left:210,position:'relative',top:325}}></span>
                <span className="circle-dot" style={{left:220,position:'relative',top:325}}></span>
                <span className="circle-dot" style={{left:230,position:'relative',top:325}}></span>
                </div>
            </div>
            <div className='circles' style={{position:'relative',top:300,right:70,display:'flex'}}>
                <div>
                <span className="circle-dota" style={{left:405,position:'relative',top:200}}></span>
            <span className="circle-dota" style={{left:430,position:'relative',top:145}}></span>
            <span className="circle-dota" style={{left:380,position:'relative',top:165}}></span>
            <span className="circle-dota" style={{left:358,position:'relative',top:235}}></span>
            <span className="circle-dota" style={{left:363,position:'relative',top:250}}></span>
            <span className="circle-dota" style={{left:380,position:'relative',top:150}}></span>
            <span className="circle-dota" style={{left:352,position:'relative',top:250}}></span>
                </div>
                <div style={{position:'relative',top:10,left:10}}>
                <span className="circle-dota" style={{left:405,position:'relative',top:195}}></span>
            <span className="circle-dota" style={{left:386,position:'relative',top:170}}></span>
            <span className="circle-dota" style={{left:367,position:'relative',top:142}}></span>
            <span className="circle-dota" style={{left:377,position:'relative',top:142}}></span>
            <span className="circle-dota" style={{left:297,position:'relative',top:142}}></span>
            <span className="circle-dota" style={{left:305,position:'relative',top:220}}></span>
            <span className="circle-dota" style={{left:285,position:'relative',top:243}}></span>
            <span className="circle-dota" style={{left:238,position:'relative',top:243}}></span>
            <span className="circle-dota" style={{left:275,position:'relative',top:243}}></span>
                </div>
                <div>
                <span className="circle-dota" style={{left:315,position:'relative',top:152}}></span>
                <span className="circle-dot" style={{left:325,position:'relative',top:152}}></span>
                <span className="circle-dot" style={{left:335,position:'relative',top:152}}></span>
                <span className="circle-dot" style={{left:335,position:'relative',top:172}}></span>
                <span className="circle-dot" style={{left:315,position:'relative',top:198}}></span>
                <span className="circle-dot" style={{left:275,position:'relative',top:218}}></span>
                <span className="circle-dot" style={{left:225,position:'relative',top:218}}></span>
                <span className="circle-dot" style={{left:175,position:'relative',top:218}}></span>
                <span className="circle-dot" style={{left:155,position:'relative',top:197}}></span>
                <span className="circle-dot" style={{left:135,position:'relative',top:175}}></span>
                <span className="circle-dot" style={{left:115,position:'relative',top:240}}></span>
                <span className="circle-dot" style={{left:95,position:'relative',top:262}}></span>
                <span className="circle-dot" style={{left:115,position:'relative',top:240}}></span>
                <span className="circle-dot" style={{left:120,position:'relative',top:260}}></span>
                </div>
                <div style={{position:'relative',right:235,top:10}}>
                <span className="circle-dot" style={{left:405,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:430,position:'relative',top:145}}></span>
            <span className="circle-dot" style={{left:380,position:'relative',top:165}}></span>
            <span className="circle-dot" style={{left:358,position:'relative',top:235}}></span>
            <span className="circle-dot" style={{left:363,position:'relative',top:250}}></span>
            <span className="circle-dot" style={{left:380,position:'relative',top:150}}></span>
            <span className="circle-dot" style={{left:352,position:'relative',top:250}}></span>
                </div>
                <div style={{position:'relative',right:150,top:-10}}>
                <span className="circle-dot" style={{left:310,position:'relative',top:175}}></span>
                <span className="circle-dot" style={{left:290,position:'relative',top:205}}></span>
                <span className="circle-dot" style={{left:270,position:'relative',top:235}}></span>
                <span className="circle-dot" style={{left:250,position:'relative',top:265}}></span>
                <span className="circle-dot" style={{left:260,position:'relative',top:265}}></span>
                <span className="circle-dot" style={{left:270,position:'relative',top:265}}></span>
                </div>
                <div style={{position:'relative',right:340,top:10}}>
                <span className="circle-dot" style={{left:548,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:501,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:450,position:'relative',top:200}}></span>
            <span className="circle-dot" style={{left:431,position:'relative',top:175}}></span>
            <span className="circle-dot" style={{left:412,position:'relative',top:148}}></span>
            <span className="circle-dot" style={{left:424,position:'relative',top:148}}></span>
            <span className="circle-dot" style={{left:432,position:'relative',top:148}}></span>
            <span className="circle-dot" style={{left:350,position:'relative',top:250}}></span>
            <span className="circle-dot" style={{left:330,position:'relative',top:225}}></span>
            <span className="circle-dot" style={{left:340,position:'relative',top:250}}></span>
            <span className="circle-dot" style={{left:350,position:'relative',top:250}}></span>
                </div>
                <div>
                    <span className='circle-dot'style={{left:120,position:'relative',top:155}}></span>
                    <span className='circle-dot'style={{left:70,position:'relative',top:155}}></span>
                    <span className='circle-dot'style={{left:20,position:'relative',top:165}}></span>
                    <span className='circle-dot'style={{right:10,position:'relative',top:195}}></span>
                    <span className='circle-dot'style={{right:5,position:'relative',top:215}}></span>
                    <span className='circle-dot'style={{left:10,position:'relative',top:215}}></span>
                    <span className='circle-dot'style={{left:10,position:'relative',top:235}}></span>
                    <span className='circle-dot'style={{right:10,position:'relative',top:260}}></span>
                    <span className='circle-dot'style={{right:55,position:'relative',top:270}}></span>
                    <span className='circle-dot'style={{right:105,position:'relative',top:270}}></span>
                    <span className='circle-dot'style={{right:150,position:'relative',top:270}}></span>
                </div>
            </div>
    </div>
    <div id={id} ref={sectionRef} style={{ margin: '20px', padding: '10px', position:'relative', marginTop: id === 'About' ? '600px' : '0' }}>
      {id === 'About' && (
        <>
          <h2>About Me</h2>
          <p>Hello everyone,</p>
          <p>
            My name is Rohan Raghav, third-year student of CSE AIML. My domain ranges in Full Stack Development and machine learning.
            I am a full stack developer of CAC Club. I look forward to interacting with everyone.
          </p>
        </>
      )}
    </div>
  </>
  )
}

export default Cac
