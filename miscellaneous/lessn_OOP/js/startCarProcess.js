function startCarProcess(containerId) {
  function carStartListener() {
    var randomNumber = Math.random();

    if (randomNumber > 0.5) {
      carStarted();
    } else {
      carCannotBeStarted();
    }
  }

  function drawStatus(status) {
    processEls(statusLabels, function (item) {
      item.textContent = status;
    });
  }

  function processEls(arrayOfEls, processor) {
    for (var i = 0; i < arrayOfEls.length; i++) {
      var item = arrayOfEls[i];
      processor(item);
    }
  }

  function devLog(message) {
    //console.log(message);
  }

  function carStarted() {
    drawStatus("Car have started");

    devLog("Car have started");

    processEls(startButtons, function (startButton) {
      startButton.classList.add("hide");
    });

    gearBoxStarted();

    plannedCarshStarted();

    devLog("we wait crash");
  }

  function carCannotBeStarted() {
    devLog("Something wrong");
    drawStatus("Car can't be started. Try again!");
  }

  function gearBoxStarted() {
    var gearBoxValue = 1;

    processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
      gearBoxValueLabel.textContent = gearBoxValue;
    });

    function incrementGearBoxValue() {
      if (gearBoxValue < 5) {
        gearBoxValue++;
        processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
          gearBoxValueLabel.textContent = gearBoxValue;
        });
      }
    }
    gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
  }

  function plannedCarshStarted() {
    function engineCrashed() {
      devLog("engine crashed");
      drawStatus("Engine have crashed. Car have stopped");

      processEls(startButtons, function (startButton) {
        startButton.classList.remove("hide");
      });

      processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
        gearBoxValueLabel.textContent = "N";
      });

      window.clearInterval(gearBoxInterval);
    }
    window.setTimeout(engineCrashed, 3000);
  }

  render();

  var gearBoxInterval;
  var startButtons = document
    .getElementById(containerId)
    .querySelectorAll("[data-role='start-car']");
  var statusLabels = document
    .getElementById(containerId)
    .querySelectorAll("[data-role='status']");
  var gearBoxValueLabels = document
    .getElementById(containerId)
    .querySelectorAll("[data-role='gear-box-value']");

  processEls(startButtons, function (startButton) {
    startButton.addEventListener("click", carStartListener);
  });
}
