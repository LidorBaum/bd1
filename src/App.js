import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {svg} from './assets/happy.svg'
function App() {
    const [step, setStep] = useState()

    switch (step) {
        case 'pop':
            console.log(step)
            return (
                <header className="App-header">
                    <div style={{textAlign: 'center'}}>

                        <h2>וואו, </h2>
                        <h2>ככה את מוותרת על ארוחת בוקר?</h2>
                        <h2>בסדר, בסדר, תקבלי את שניהם </h2>
                        <img src={require('./assets/Screen_Shot_2022-12-30_at_13.16.34-removebg-preview.png')} style={{display:'block', margin: '0 auto'}} />
                        <button onClick={()=>setStep('')} style={{fontSize: 20, fontFamily:'heb_varela', marginTop: 10, borderRadius: 20, height: 40, width: 100, backgroundColor: 'none', }}>אחורה</button>
                    </div>
                </header>
            )
        case 'boker':
            return(
                <header className="App-header">
                    <div style={{textAlign: 'center'}}>

                        <h2>ישר אוכל, אה?</h2>
                        <h2>בתכלס את צודקת,</h2>
                        <h2>אבל למה לבחור כשאפשר את שניהם ?</h2>
                        <img src={require('./assets/Screen_Shot_2022-12-30_at_13.20.24-removebg-preview.png')} style={{display:'block', margin: '0 auto', height: 300}} />
                        <button onClick={()=>setStep('')} style={{fontSize: 20, fontFamily:'heb_varela', marginTop: 10, borderRadius: 20, height: 40, width: 100, backgroundColor: 'none', }}>אחורה</button>
                    </div>
                </header>
            )
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{
                    position: 'sticky',
                    top: "80vh",
                    backgroundColor: '#f0f0f0',
                    width: '100%',
                    height: 200
                }} className={'scroller'}>
                    <img className={'scrolitem'}
                         src={require('./assets/1200px-Circle_arrow_down_font_awesome.svg.png')}
                         style={{width: 65, borderRadius: 30}}/>

                </div>
                <div style={{
                    height: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -200
                }}>
                    <h1>היי, מזל טוב ! </h1>
                    <h1>שמחים שהגעת!</h1>
                    <img
                        src={require('./assets/party-emoji-happy-face-with-birthday-hat-confetti-big-smile-3d_163786-497.webp')}
                        style={{width: 200, borderRadius: 30}}/>

                </div>
                <div style={{height: 250}}>
                    <h1>אוי, זה לא הציפ הנכון</h1>
                </div>
                <div style={{height: 200}}>
                    <h2>לא נורא, </h2>
                    <h2>תנסי שוב ביום הולדת הבא</h2>
                </div>
                <h2>כפרס ניחומים, בחרי מתנה מהמתנות הבאות:</h2>
                <div onClick={() => setStep('boker')}>
                    <h3>ארוחת בוקר מפנקת (לא בגורילה)</h3>
                    <img src={require('./assets/FUDY4458.jpg')} style={{width: 200, borderRadius: 15}}/>
                </div>
                <div style={{height: 500}} onClick={() => setStep('pop')}>
                    <h3>או פופ חדש לאוסף</h3>
                    <img src={require('./assets/funko-pop-mystery.png')} style={{width: 200, borderRadius: 15}}/>
                </div>

            </header>
        </div>
    );
}

export default App;
