 submit.onclick = function () {
        let num1 = Number(document.getElementById(`input1`).value);
        let num2 = Number(document.getElementById(`input2`).value);
        let submit = document.getElementById(`submit`);
        let dropdown = document.getElementById(`dropdown`).value;
        let result = document.getElementById(`result`);

        if (dropdown === `plus`) {
          result.textContent = `Result is ${num1 + num2}`;
        } else if (dropdown === `minus`) {
          result.textContent = `Result is ${num1 - num2}`;
        } else if (dropdown === `divide`) {
          result.textContent = `Result is ${num1 / num2}`;
        } else if (dropdown === `multiply`) {
          result.textContent = `Result is ${num1 * num2}`;
        } else {
          result.textContent = `Select an Operator`;
        }
      }