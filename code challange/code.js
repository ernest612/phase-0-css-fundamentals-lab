function getstudentgrade() {
    while(true) {
        const marks = Numbe(prompt("Studentgrade)(0-100):"));
        if(isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid input. Please enter a number between 0 and 100.");
        } else {
            if (marks > 79) {
                return "A";
            } else if (marks > 60) {

                return "B";
            } else if (marks > 49) {
                return "C";
            } else if (marks > 39) {
                return "D";
            } else {
                return "E";
            }