import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand-left">
          <div className="logo-icon">
  <div className="logo-inner">
    <span className="logo-image">▧</span>
    <span className="logo-text">Image<br />Pipeline</span>
  </div>
</div>
          <span>Image Pipeline</span>
        </div>
        <div className="brand-right">
          <span className="logo-a">a</span>i<span>ensured</span>
        </div>
      </header>

      <main className="main-content">
        <section className="heading">
          <h1>Existing Pipelines</h1>
          <p>Manage and monitor your AI model training pipelines</p>
        </section>

        <section className="stats">
          <div className="stat-card new-project">
            <div className="plus">+</div>
            <h3>New Project</h3>
          </div>

          <div className="stat-card total">
            <h2>1</h2>
            <p>Total Projects</p>
          </div>

          <div className="stat-card completed">
            <h2>1</h2>
            <p>Completed</p>
          </div>

          <div className="stat-card failed">
            <h2>0</h2>
            <p>Failed</p>
          </div>
        </section>

        <section className="dashboard">
          <h2>Pipeline Management Dashboard (Local)</h2>

          <div className="table-controls">
            <select>
              <option>Rows</option>
              <option>5</option>
              <option>10</option>
            </select>

            <input type="text" placeholder="⌕  Search Project Name" />
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>PROJECT NAME</th>
                  <th>TYPE</th>
                  <th>CREATED AT</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td className="project-name">Eurosat</td>
                  <td>
                    <span className="type-badge">IMAGE PIPELINE</span>
                  </td>
                  <td>11/18/2026, 11:57 AM</td>
                  <td>
                    <button className="delete-btn" title="Delete">♲</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-bottom">
            <span>Showing 1 to 1 of 1 entries</span>
            <div className="pagination">
              <button>Prev</button>
              <span>1 / 1</span>
              <button>Next</button>
            </div>
          </div>

          <div className="continue-row">
            <button className="continue-btn">Continue</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>aiensured</h2>
            <p>
              AiEnsured is a complete, enterprise-grade testing
              and validation suite for AI and Machine Learning products.
            </p>
            <div className="socials">
              <span>f</span>
              <span>𝕏</span>
              <span>in</span>
              <span>◎</span>
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <p>Aiensured</p>
            <p>Deepfake Detection</p>
            <p>LLM Integration</p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AiEnsured. All Rights Reserved.</span>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;