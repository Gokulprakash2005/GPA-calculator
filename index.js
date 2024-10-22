  function addsub()
       {
        var newRow = `
                <tr>
                    <td><input type="text" class="form-control form-control-lg mt-2" id="Course_name" name="Course_name" required  ></td>
                    <td>
                    <select class="form-select form-select-lg mt-2" id="grade" name="grade" required>
                        <option value="">Select Grade</option>
                        <option value="10">O</option>
                        <option value="9">A+</option>
                        <option value="8">A</option>
                        <option value="7">B+</option>
                        <option value="6">B</option>
                        <option value="5">c+</option>
                    </select>
                    </td>
                   <td><input type="number" class="form-control form-control-lg mt-2" id="Course_credit" name="Course_credit" required  ></td>
                   <td><i class="fa-solid fa-xmark mt-4 " onclick="remove(event)"></i></td>
              </tr>
            `;
        document.getElementById("addrow").insertAdjacentHTML('beforeend',newRow);
       }
       
       function addGPA() 
       {
        var totalGradescredits = 0;
        var totalCredits = 0;
        document.querySelectorAll("#addrow tr").forEach(row => {
            var gradeValue = parseInt(row.querySelector('select[name="grade"]').value);
            var creditValue = parseInt(row.querySelector('input[name="Course_credit"]').value);
                totalGradescredits = totalGradescredits+ gradeValue * creditValue;
                totalCredits =totalCredits+ creditValue;
        });
        var gpa =totalGradescredits / totalCredits;
        document.getElementById("result").innerHTML = "Your GPA is: " + gpa;
       }

    function remove(event)
    {
        event.target.closest('tr').remove();
    }
    