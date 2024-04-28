 function addtotable() {
        const name = document.getElementById("nameInput").value;
        const lastname = document.getElementById("lastnameInput").value;
        const age = document.getElementById("ageInput").value;

        if (name && lastname && age) {
          var table = document.getElementById("table").getElementsByTagName("tbody")[0];

          var newrow = table.insertRow(table.rows.length);
          var cell1 = newrow.insertCell(0);
          var cell2 = newrow.insertCell(1);
          var cell3 = newrow.insertCell(2);

          cell1.innerHTML = name;
          cell2.innerHTML = lastname;
          cell3.innerHTML = age;

          document.getElementById("nameInput").value = "";
          document.getElementById("lastnameInput").value = "";
          document.getElementById("ageInput").value = "";
        } else {
          alert("Please fill in all fields!");
        }
      }

      function sortTable(order) {
        var tbody = document.getElementById("table").getElementsByTagName("tbody")[0];
        var rows = tbody.getElementsByTagName("tr");
        var rowsArray = Array.from(rows);

        rowsArray.sort(function(rowA, rowB) {
          var ageA = parseInt(rowA.getElementsByTagName("td")[2].textContent);
          var ageB = parseInt(rowB.getElementsByTagName("td")[2].textContent);

          if (order === 'asc') {
            return ageA - ageB;
          } else {
            return ageB - ageA;
          }
        });

        tbody.innerHTML = "";

        rowsArray.forEach(function(row) {
          tbody.appendChild(row);
        });
      }