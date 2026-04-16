<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Proccessing</title>
    <style>
        h1 {
            margin: 0;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        form {
            width: 500px;
            margin: 10rem auto;
            display: flex;
            flex-direction: column;
            background-color: #e3e3e3;
            padding: 2rem;
            border-radius: 14px;
        }

        label {
            margin-bottom: 0.5rem;
        }

        input {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #4CAF50;
            color: #fff;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .hasil {
            width: 500px;
            margin: 2rem auto;
            background-color: #e3e3e3;
            padding: 2rem;
            border-radius: 14px;
        }

        table {
            width: 100%;
        }

        tr td:not(:last-child) {
            font-weight: bold;
        }

        tr {
            height: 1.5rem;
        }

        tr:last-child {
            height: 5rem;
        }

        span {
            padding: 0.5rem 1rem;
        }

        .bg-green {
            background-color: green;
            color: white;
        }

        .bg-red {
            background-color: red;
            color: white;
        }
    </style>
</head>

<body>
    <form method="get">
        <h1>Form Input Nilai Mahasiswa</h1>
        <label>Nama</label>
        <input type="text" name="nama">
        <label>Email</label>
        <input type="email" name="email">
        <label>Nilai Ujian</label>
        <input type="number" name="nilai">

        <button type="submit" name="submit">Submit</button>
    </form>

    <?php if (isset($_GET['submit'])) { ?>
        <div class="hasil">
            <h1>Hasil</h1>
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td><?php echo $_GET['nama']; ?></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td><?php echo $_GET['email']; ?></td>
                </tr>
                <tr>
                    <td>Nilai</td>
                    <td>:</td>
                    <td><?php echo $_GET['nilai']; ?></td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>
                        <?php
                        if ($_GET['nilai'] >= 70) {
                            echo "<span class='bg-green'>Lulus</span>";
                        } else {
                            echo "<span class='bg-red'>Remedial</span>";
                        }
                        ?>
                    </td>
                </tr>
            </table>
        </div>
    <?php } ?>
</body>

</html>