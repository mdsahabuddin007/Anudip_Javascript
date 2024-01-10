
const accessKeyId = "Your access key";
const secretAccessKey = "your secret access key";
const bucketName = "bucket_name"; 

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: "ap-south-1"
});

// Create S3 instance
const s3 = new AWS.S3();

function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const params = {
        Bucket: bucketName,
        Key: file.name,
        Body: file,
        ACL: 'public-read' // Set the ACL to make the uploaded image publicly accessible
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error(err);
            alert('Error uploading image.');
        } else {
            console.log(data);
            document.getElementById('uploadedImage').src = data.Location;
            document.getElementById('uploadedImage').style.display = 'block';
            alert('Image uploaded successfully.');
        }
    });
}
