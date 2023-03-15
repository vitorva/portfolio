interface HomeProps {
    homeRef: React.RefObject<HTMLDivElement>;
}

function Home({homeRef} : HomeProps) {

    return (<div ref ={homeRef} style={{ scrollMarginTop: '10vh' }} className="home">
        <p>HOME</p>
    </div>)
}

export default Home;