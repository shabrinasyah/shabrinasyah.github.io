(function() {
    emailjs.init("wk1sNFGhsEPdWJUvx");
})();

function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject_email: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_9n4z3mq", "template_n958qex", params).then(
        function(res) {
            alert("Your message has been Sent!");
        },
        function(error) {
            alert("FAILED...", error);
        }
    );
}

function download() {
    axios({
            url: 'img/CV_William_Rayhan_Harsono.pdf',
            method: 'GET',
            responseType: 'blob'
        })
        .then((response) => {
            const url = window.URL
                .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'CV_William_Rayhan_Harsono.pdf');
            document.body.appendChild(link);
            link.click();
        })
}