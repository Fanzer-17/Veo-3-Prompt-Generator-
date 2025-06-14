document.addEventListener('DOMContentLoaded', () => {
    const changeStyleBtn = document.getElementById('change-style-btn');
    
    const themes = ['default-theme', 'dark-theme', 'blue-black-white-theme'];
    let currentThemeIndex = 0;

    if (changeStyleBtn) {
        changeStyleBtn.addEventListener('click', () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            document.body.className = themes[currentThemeIndex];
        });
    }

    // More script to come for prompt generation
    const generateBtn = document.getElementById('generate-btn');

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            // Get values from all input fields
            const sceneTitle = document.getElementById('scene-title').value;
            const characterDescription = document.getElementById('character-description').value;
            const voiceDetails = document.getElementById('voice-details').value;
            const characterActions = document.getElementById('character-actions').value;
            const characterExpressions = document.getElementById('character-expressions').value;
            const settingTime = document.getElementById('setting-time').value;
            const visualDetailsText = document.getElementById('visual-details-text').value;
            const cameraMovement = document.getElementById('camera-movement').value;
            const atmosphere = document.getElementById('atmosphere').value;
            const soundAmbience = document.getElementById('sound-ambience').value;
            const dialogue = document.getElementById('dialogue').value;
            const negativePrompt = document.getElementById('negative-prompt').value;

            // --- Indonesian Prompt Generation ---
            // "develop the prompt for more detail" -> combine into a coherent narrative prompt
            let indonesianPrompt = `Judul Adegan: ${sceneTitle}\n\n`;
            indonesianPrompt += `Deskripsi Karakter Inti: ${characterDescription}\n\n`;
            indonesianPrompt += `Detail Suara Karakter: ${voiceDetails}\n\n`;
            indonesianPrompt += `Tindakan Karakter: ${characterActions}\n\n`;
            indonesianPrompt += `Ekspresi Karakter: ${characterExpressions}\n\n`;
            indonesianPrompt += `Latar dan Waktu: ${settingTime}\n\n`;
            indonesianPrompt += `Detail Visual Tambahan: ${visualDetailsText}\n`;
            indonesianPrompt += `Gerakan Kamera: ${cameraMovement}\n\n`;
            indonesianPrompt += `Suasana Keseluruhan: ${atmosphere}\n\n`;
            indonesianPrompt += `Suara Lingkungan/Ambience: ${soundAmbience}\n\n`;
            indonesianPrompt += `Dialog Karakter: ${dialogue}\n\n`;
            indonesianPrompt += `Prompt Negatif: ${negativePrompt}`;

            document.getElementById('indonesian-prompt').value = indonesianPrompt;

            // --- English Prompt Generation (with simulated translation) ---
            // This is a placeholder for a real translation API.
            // For now, it will use English labels and keep the dialogue in Indonesian.
            // The content of other fields will be "translated" with a simple placeholder.
            // A more sophisticated solution would involve a translation service.

            const translateField = (fieldName, value) => {
                if (!value.trim()) return "";
                // Simple "translation" - in a real app, this would be an API call
                // For this demo, we'll just prepend the field name to the value,
                // except for the dialogue.
                return `${fieldName}: ${value}\n\n`;
            }

            let englishPrompt = `Scene Title: ${sceneTitle}\n\n`;
            englishPrompt += `Core Character Description: ${characterDescription}\n\n`;
            englishPrompt += `Character Voice Details: ${voiceDetails}\n\n`;
            englishPrompt += `Character Actions: ${characterActions}\n\n`;
            englishPrompt += `Character Expressions: ${characterExpressions}\n\n`;
            englishPrompt += `Setting and Time: ${settingTime}\n\n`;
            englishPrompt += `Additional Visual Details: ${visualDetailsText}\n`;
            englishPrompt += `Camera Movement: ${cameraMovement}\n\n`;
            englishPrompt += `Overall Atmosphere: ${atmosphere}\n\n`;
            englishPrompt += `Environmental Sound/Ambience: ${soundAmbience}\n\n`;
            
            // "except for the "spoken sentence" section."
            englishPrompt += `Character Dialogue: ${dialogue}\n\n`; 
            
            englishPrompt += `Negative Prompt: ${negativePrompt}`;


            document.getElementById('english-prompt').value = englishPrompt;
        });
    }

    // Function to pre-fill the form with example data
    const populateExampleData = () => {
        document.getElementById('scene-title').value = 'Terminal bus malam';
        document.getElementById('character-description').value = 'Seorang vlogger pria muda dari Maluku, berusia 27 tahun.\nPerawakan/Bentuk Tubuh: perawakan berotot, tinggi 164 cm, bentuk tubuh proporsional.\nWarna Kulit: mangga matang yang cerah.\nRambut: lurus, coklat kehitaman, belah samping.\nWajah: bentuk wajah oval, alis tebal alami, mata hitam besar, senyum ramah, pipi merona, bibir alami.\nPakaian: Mengenakan hoodie kamuflase dan celana hitam dengan sobekan di lutut, membawa ransel kecil.';
        document.getElementById('voice-details').value = 'Dia berbicara dengan suara pria muda yang hangat dan antusias.\nPitch: Pria Muda.\nTimbre: Ramah dan energik.\nAksen/Dialek: Aksen Indonesia dengan sentuhan Maluku yang halus, berbicara murni dalam bahasa Indonesia.\nGaya Bicara: Tempo sedang hingga cepat, gaya bicara yang hidup dan ekspresif.\nPENTING: Semua dialog harus dalam bahasa Indonesia dengan pengucapan yang alami dan jelas. Pastikan suara karakter tetap konsisten sepanjang video.';
        document.getElementById('character-actions').value = 'Berjalan di sekitar terminal bus malam sambil mengamati aktivitas penumpang dan pedagang.';
        document.getElementById('character-expressions').value = 'Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik ke arah kamera.';
        document.getElementById('setting-time').value = 'Latar: di sebuah terminal bus antarkota pada malam hari, dengan pedagang kaki lima di sepanjang jalur keberangkatan dan beberapa bus berjejer dengan lampu menyala.\nWaktu: malam hari, dengan gerimis ringan.';
        document.getElementById('visual-details-text').value = 'Pencahayaan: alami dari lampu jalan dan lampu bus, pantulan cahaya di aspal basah.\nGaya video/gaya seni: sinematik realistis.\nKualitas visual: resolusi 4K.';
        document.getElementById('camera-movement').value = '3D Rotation';
        document.getElementById('atmosphere').value = 'Suasana sibuk, hidup dengan nuansa perjalanan malam yang semarak dan dinamis meskipun hujan.';
        document.getElementById('sound-ambience').value = 'SUARA: Mesin bus menyala, pengumuman melalui pengeras suara, hujan ringan, dan percakapan samar antara penumpang dan pedagang.';
        document.getElementById('dialogue').value = 'DIALOG dalam bahasa Indonesia: Karakter berkata: Setiap kota punya terminal seperti ini, dan aku sangat suka suasana malamnya… hangat meskipun gerimis seperti ini. Rasanya seperti perjalanan baru akan segera dimulai.';
        document.getElementById('negative-prompt').value = 'Hindari: teks di layar, subtitle, teks dalam video, font, logo, distorsi, artefak, anomali, wajah ganda, bagian tubuh yang cacat, tangan abnormal, orang tambahan, objek yang mengganggu, kualitas rendah, keburaman, kesalahan, suara robot, suara rusak.';
    };

    populateExampleData();
}); 