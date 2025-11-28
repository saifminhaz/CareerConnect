function openModal(type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    let content = '';

    if (type === 'add') {
        modalTitle.textContent = 'Add Project';
        content = `
            <div class="form-group">
                <label class="form-label">Project Name</label>
                <input type="text" class="form-input" placeholder="e.g. AI Task Manager">
            </div>
            <div class="form-group">
                <label class="form-label">Description</label>
                <textarea class="form-input" rows="4" placeholder="Describe your project..."></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">GitHub Link</label>
                <input type="text" class="form-input" placeholder="https://github.com/username/project">
            </div>
            <div class="form-group">
                <label class="form-label">Live Demo Link</label>
                <input type="text" class="form-input" placeholder="https://yourproject.com">
            </div>
            <div class="form-group">
                <label class="form-label">Technologies</label>
                <input type="text" class="form-input" placeholder="Python, React, TensorFlow">
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="closeModal()">Add Project</button>
        `;
    } else if (type === 'project1') {
        modalTitle.textContent = 'AI Task Manager';
        content = `
            <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #0a66c2, #004182); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; margin-bottom: 1.5rem;">🤖</div>
            <p style="color: #666; margin-bottom: 1rem; line-height: 1.6; font-size: 0.875rem;">A smart productivity application that uses machine learning to intelligently prioritize tasks based on deadlines, importance, and user behavior patterns.</p>
            <h3 style="margin-bottom: 0.75rem; margin-top: 1.5rem; font-size: 1rem;">Key Features:</h3>
            <ul style="margin-bottom: 1rem; padding-left: 1.5rem; line-height: 1.8; color: #666; font-size: 0.875rem;">
                <li>ML-based task prioritization algorithm</li>
                <li>Natural language processing for task input</li>
                <li>Real-time collaboration features</li>
                <li>Analytics dashboard with insights</li>
                <li>Cross-platform synchronization</li>
            </ul>
            <h3 style="margin-bottom: 0.75rem; font-size: 1rem;">Tech Stack:</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">React</span>
                <span class="tech-tag">TensorFlow</span>
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">Docker</span>
                <span class="tech-tag">Redis</span>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-secondary" style="flex: 1;">View on GitHub</button>
                <button class="btn-primary" style="flex: 1;">Live Demo</button>
            </div>
        `;
    } else if (type === 'project2') {
        modalTitle.textContent = 'E-Commerce Platform';
        content = `
            <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #0a66c2, #004182); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; margin-bottom: 1.5rem;">🛒</div>
            <p style="color: #666; margin-bottom: 1rem; line-height: 1.6; font-size: 0.875rem;">Full-stack online store with payment integration, inventory management, and real-time order tracking. Built for scalability and security.</p>
            <h3 style="margin-bottom: 0.75rem; margin-top: 1.5rem; font-size: 1rem;">Key Features:</h3>
            <ul style="margin-bottom: 1rem; padding-left: 1.5rem; line-height: 1.8; color: #666; font-size: 0.875rem;">
                <li>Secure payment processing with Stripe</li>
                <li>Real-time inventory management</li>
                <li>Order tracking and notifications</li>
                <li>Admin dashboard for analytics</li>
                <li>Responsive design for mobile and desktop</li>
            </ul>
            <h3 style="margin-bottom: 0.75rem; font-size: 1rem;">Tech Stack:</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">Stripe</span>
                <span class="tech-tag">Express</span>
                <span class="tech-tag">React</span>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-secondary" style="flex: 1;">View on GitHub</button>
                <button class="btn-primary" style="flex: 1;">Live Demo</button>
            </div>
        `;
    } else if (type.startsWith('project')) {
        modalTitle.textContent = 'Project Details';
        content = `
            <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #0a66c2, #004182); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; margin-bottom: 1.5rem;">💻</div>
            <p style="color: #666; margin-bottom: 1rem; line-height: 1.6; font-size: 0.875rem;">This project demonstrates advanced technical skills and problem-solving abilities.</p>
            <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="closeModal()">Close</button>
        `;
    } else if (type === 'post') {
        modalTitle.textContent = 'Create a post';
        content = `
            <div class="form-group">
                <textarea class="form-input" rows="6" placeholder="What do you want to talk about?" style="resize: none;"></textarea>
            </div>
            <div class="form-group">
                <input type="text" class="form-input" placeholder="Add hashtags (optional)">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
                <button class="btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn-primary" onclick="postUpdate()">Post</button>
            </div>
        `;
    }

    modalBody.innerHTML = content;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function applyJob(company) {
    alert(`Application submitted to ${company}!\n\nYour application has been sent and is now being tracked. You'll receive notifications when:\n• Your application is viewed by recruiters\n• Your application status changes\n• You receive interview requests\n\nCheck your Application Tracker for real-time updates.`);
}

function connectUser(button) {
    if (button.classList.contains('connected')) {
        button.textContent = 'Connect';
        button.classList.remove('connected');
    } else {
        button.textContent = 'Pending';
        button.classList.add('connected');
        setTimeout(() => {
            alert('Connection request sent! The person will be notified.');
        }, 100);
    }
}

function postUpdate() {
    alert('Your post has been published successfully!');
    closeModal();
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

function filterFeed(category) {
    const posts = document.querySelectorAll('.feed-post');
    const buttons = document.querySelectorAll('.card[style*="padding: 8px 16px"] button');

    // Update active button style
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'Top')) {
            btn.style.color = 'var(--primary)';
            btn.style.background = 'rgba(112, 181, 249, 0.1)';
        } else {
            btn.style.color = 'var(--text-sub)';
            btn.style.background = 'transparent';
        }
    });

    posts.forEach(post => {
        if (category === 'all') {
            post.style.display = 'block';
        } else {
            const postCategory = post.getAttribute('data-category');
            if (postCategory === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        }
    });
}

function addProject() {
    // Logic to add project to the list (mock implementation)
    const title = document.querySelector('input[placeholder="e.g. AI Task Manager"]').value;
    const desc = document.querySelector('textarea[placeholder="Describe your project..."]').value;
    const techs = document.querySelector('input[placeholder="Python, React, TensorFlow"]').value.split(',');

    if (title && desc) {
        const projectsList = document.getElementById('projectsList');
        const newProject = document.createElement('div');
        newProject.style.border = '1px solid var(--border)';
        newProject.style.borderRadius = '8px';
        newProject.style.padding = '16px';
        newProject.style.marginBottom = '16px';

        const techTags = techs.map(t => `<span class="tech-tag">${t.trim()}</span>`).join('');

        newProject.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                <div style="font-weight: 600; font-size: 16px; color: var(--text-main);">${title}</div>
                <div style="display: flex; gap: 8px;">
                    <a href="#" style="color: var(--text-sub); text-decoration: none;">GitHub ↗</a>
                    <a href="#" style="color: var(--primary); text-decoration: none;">Live Demo ↗</a>
                </div>
            </div>
            <p style="font-size: 14px; color: var(--text-main); margin-bottom: 12px;">${desc}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${techTags}
            </div>
        `;

        projectsList.prepend(newProject);
        closeModal();
    }
}

// Override modal content for 'add' project to include onclick handler
const originalOpenModal = openModal;
openModal = function (type) {
    originalOpenModal(type);
    if (type === 'add') {
        const btn = document.querySelector('.modal-body .btn-primary');
        btn.setAttribute('onclick', 'addProject()');
    }
}

function connectAlumni(button) {
    if (button.innerText === 'Connect') {
        button.innerText = 'Pending';
        button.style.backgroundColor = 'var(--text-sub)';
        button.style.color = 'white';
        button.style.border = 'none';

        // Show toast notification
        const toast = document.createElement('div');
        toast.innerText = 'Connection request sent!';
        toast.style.position = 'fixed';
        toast.style.bottom = '24px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#333';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '8px';
        toast.style.zIndex = '1000';
        toast.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

function requestRecommendation() {
    alert("Recommendation request feature coming soon! This will allow you to draft and send requests to alumni.");
}
