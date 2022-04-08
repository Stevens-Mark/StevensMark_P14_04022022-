/*  ********** Online / Offline Detection **********  */

// Request a small image at an interval to determine status
// ** Get a 1x1 pixel image here: http://www.1x1px.me/
// ** Use this code with an HTML element with id="status"

const Status = () => {

  const checkOnlineStatus = async () => {
    try {
      const online = await fetch("/check.svg",{
        mode: 'no-cors',
        cache: 'no-cache'
    });
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

  setInterval(async () => {
    const result = await checkOnlineStatus();
     if (result) {console.log('online')}
    else{
      console.log('offline')
    }

  }, 3000); // probably too often, try 30000 for every 30 seconds

  // forgot to include async load event listener in the video! 
  // window.addEventListener("load", async (event) => {
  //   const statusDisplay = document.getElementById("status");
  //   statusDisplay.textContent = (await checkOnlineStatus())
  //     ? "Online"
  //     : "OFFline";
  // });

  return (
    <span className='sr-only'></span>
  )
}

export default Status