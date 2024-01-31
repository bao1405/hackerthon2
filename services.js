function getData() {
    // Sử dụng Fetch API để gửi yêu cầu GET đến server
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            // Hiển thị kết quả trên giao diện
            document.getElementById('result').innerHTML = `
                <h2>Data from Server</h2>
                <p>User ID: ${data.userId}</p>
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = '<p>Error fetching data from server.</p>';
        });
}
