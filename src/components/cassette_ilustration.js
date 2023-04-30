import './cassette_ilustration.css'

function CassetteIlustration() {
  return (
    <div style={{ marginTop: '100px' }}>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:900,400|Shadows+Into+Light"
        rel="stylesheet"
        type="text/css"
      />
      <div className="cassetteOuter">
        <span className="screw screw1">
          <span className="screwInner" />
        </span>
        <span className="screw screw2">
          <span className="screwInner" />
        </span>
        <span className="screw screw3">
          <span className="screwInner" />
        </span>
        <span className="screw screw4">
          <span className="screwInner" />
        </span>
        <div className="stickerOuter">
          <div className="sticker">
            <span className="a-side">A</span>
            <p className="cursive">The Sound Studio</p>
            <span className="stripe" />
            <span className="c90">114</span>
            <span className="logo">From BCN</span>
            <div className="middle clearfix">
              <span className="circle one">
                <span className="teethBox">
                  <span className="teeth" />
                  <span className="teeth" />
                  <span className="teeth" />
                </span>
              </span>
              <div className="window">
                <span className="reelOne" />
                <span className="reelTwo" />
              </div>
              <span className="circle two">
                <span className="teethBox">
                  <span className="teeth" />
                  <span className="teeth" />
                  <span className="teeth" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="cassetteBottom">
          <span className="screw screw5">
            <span className="screwInner" />
          </span>
          <span className="bottomShadow">
            <span className="bottomHoles one" />
            <span className="bottomHoles two" />
            <span className="bottomHoles three" />
          </span>
          <span className="holes one" />
          <span className="holes two" />
        </div>
      </div>
      {/* <div className="linerNotes">
        <div className="linerNotesTop clearfix">
          <span className="boxDesc">
            TFH D-C90 90min. @ 1-7/8 ips(2 × 45min.)
          </span>
          <div className="infoBoxes clearfix">
            <span className="box1">Tape Selector</span>
            <span className="box2">Normal</span>
            <span className="box3">
              Bias-Normal
              <br />
              EQ-120µS
            </span>
            <span className="boxCopyright">
              ©1972-1977 TFH Electronics Co.,Ltd.
            </span>
          </div>
        </div>
        <div className="linerNotesSpine">
          <span className="spineTitle">
            D-<span className="green">C90</span> TFH
          </span>
        </div>
        <div className="linerNotesMainContent clearfix">
          <span className="side">A</span>
          <span className="side">B</span>
          <div className="linerNotesMainContentInner">
            <h1>Cassette CSS</h1>
            <p>
              This cassette and sleevenotes are made entirely from CSS and HTML.
              There's not a single image element here!
            </p>
          </div>
        </div>
        <div className="linerNotesBottom">
          <p className="black">Dynamic Cassette</p>
          <p className="white">Precision Cassette Mechanism</p>
          <p className="title">
            D-<span className="green">C90</span> TFH®
          </p>
          <p className="black">Low Noise High Output</p>
        </div>
      </div> */}
    </div>
  )
}

export { CassetteIlustration }
