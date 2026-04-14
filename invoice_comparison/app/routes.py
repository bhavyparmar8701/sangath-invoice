from flask import render_template, request, jsonify
from app import app
from app.ocr import extract_text_from_image, extract_text_from_pdf

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/compare_invoices', methods=['POST'])
def compare_invoices():
    file1 = request.files['invoice1']
    file2 = request.files['invoice2']

    file1_path = 'app/uploads/invoice1.pdf'
    file2_path = 'app/uploads/invoice2.pdf'

    file1.save(file1_path)
    file2.save(file2_path)

    text1 = extract_text_from_pdf(file1_path)
    text2 = extract_text_from_pdf(file2_path)

    if text1 == text2:
        return jsonify({"result": "Invoices are the same!"})
    else:
        return jsonify({"result": "Invoices are different."})
