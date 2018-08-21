import Web3 from 'web3';
//copied from truffle react box

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // For debugging
      console.log('Injected web3 detected.');

      // Use MetaMask's provider.
      resolve({
        web3: new Web3(window.web3.currentProvider),
      }
    );
    } else {
      // DEBUGGING
      console.log('No web3 instance injected, using Local web3.');

      resolve({web3:null});
    }
  });
});

export default getWeb3;
