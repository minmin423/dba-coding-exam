const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\x1b[36m%s\x1b[0m", "Welcome to Employee Summary Generator!");
console.log("\x1b[33m%s\x1b[0m", "Please provide the following information:");

rl.question("Enter the number of newly hired males: ", (newlyHiredMales) => {
  rl.question("Enter the number of newly hired females: ", (newlyHiredFemales) => {
    rl.question("Enter the number of permanent position males: ", (permanentPosMales) => {
      rl.question("Enter the number of permanent position females: ", (permanentPosFemales) => {
        rl.question("Enter the number of resigned males: ", (resignedMales) => {
          rl.question("Enter the number of resigned females: ", (resignedFemales) => {
            console.log("");
            console.log("\x1b[36m%s\x1b[0m", "=== Thank you for the Information! ===");
            console.log("");
            console.log("\x1b[35m%s\x1b[0m", "=== Here is the Summary !!! ===");
            console.log("\x1b[33m%s\x1b[0m", "Note: Percentages are rounded to nearest whole number to better represent people =)");
            console.log("");

            newlyHiredMales = parseInt(newlyHiredMales);
            newlyHiredFemales = parseInt(newlyHiredFemales);
            permanentPosMales = parseInt(permanentPosMales);
            permanentPosFemales = parseInt(permanentPosFemales);
            resignedMales = parseInt(resignedMales);
            resignedFemales = parseInt(resignedFemales);

            const totalNewlyHired = newlyHiredMales + newlyHiredFemales;
            const totalPermanentPos = permanentPosMales + permanentPosFemales;
            const totalResigned = resignedMales + resignedFemales;

            const newlyHiredMalePercentage = Math.round((newlyHiredMales / totalNewlyHired) * 100);
            const newlyHiredFemalePercentage = Math.round((newlyHiredFemales / totalNewlyHired) * 100);
            const permanentPosMalePercentage = Math.round((permanentPosMales / totalPermanentPos) * 100);
            const permanentPosFemalePercentage = Math.round((permanentPosFemales / totalPermanentPos) * 100);
            const resignedMalePercentage = Math.round((resignedMales / totalResigned) * 100);
            const resignedFemalePercentage = Math.round((resignedFemales / totalResigned) * 100);

            console.log("\x1b[36m%s\x1b[0m", `Number of newly hired employees = ${totalNewlyHired}`);
            console.log("\x1b[34m%s\x1b[0m", `Male = ${newlyHiredMalePercentage}%`);
            console.log("\x1b[35m%s\x1b[0m", `Female = ${newlyHiredFemalePercentage}%`);
            console.log("\x1b[36m%s\x1b[0m", `Number of permanent employees = ${totalPermanentPos}`);
            console.log("\x1b[34m%s\x1b[0m", `Male = ${permanentPosMalePercentage}%`);
            console.log("\x1b[35m%s\x1b[0m", `Female = ${permanentPosFemalePercentage}%`);
            console.log("\x1b[36m%s\x1b[0m", `Number of resigned employees = ${totalResigned}`);
            console.log("\x1b[34m%s\x1b[0m", `Male = ${resignedMalePercentage}%`);
            console.log("\x1b[35m%s\x1b[0m", `Female = ${resignedFemalePercentage}%`);
                      

            rl.close();
          });
        });
      });
    });
  });
});

