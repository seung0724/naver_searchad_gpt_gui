from flask import Flask, render_template, request, redirect, url_for, session
from flask_session import Session

# Flask app setup
app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Secret key for session encryption
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# Admin credentials
USER_CREDENTIALS = {'admin': 'admin123'}  # Username: password

# Login page
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in USER_CREDENTIALS and USER_CREDENTIALS[username] == password:
            session['logged_in'] = True
            session['username'] = username
            return redirect(url_for('dashboard'))

        return 'Invalid username or password.'

    return render_template('login.html')

# Dashboard page (Admin page)
@app.route('/dashboard')
def dashboard():
    if 'logged_in' in session:
        return render_template('dashboard.html')
    return redirect(url_for('login'))  # Redirect to login if not logged in

# Logout
@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
