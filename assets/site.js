// Asheville AI — Shared Interactive Scripts

function selectTimeSink(button) {
  const container = document.getElementById('timeSinkContainer');
  if (!container) return;
  const hiddenInput = document.getElementById('selected_time_sink');
  const allBtns = container.querySelectorAll('.time-sink-btn');

  allBtns.forEach(btn => {
    btn.classList.remove('bg-surface-container-highest', 'border-secondary', 'text-primary', 'font-semibold');
    btn.classList.add('bg-surface', 'border-primary-container/20');
    const check = btn.querySelector('.checkmark');
    if (check) check.classList.add('opacity-0');
  });

  button.classList.add('bg-surface-container-highest', 'border-secondary', 'text-primary', 'font-semibold');
  button.classList.remove('bg-surface', 'border-primary-container/20');
  const activeCheck = button.querySelector('.checkmark');
  if (activeCheck) activeCheck.classList.remove('opacity-0');

  if (hiddenInput && button.dataset.value) {
    hiddenInput.value = button.dataset.value;
  }
}

function resetAssessmentForm() {
  const form = document.getElementById('auditForm');
  if (form) form.reset();
  const successView = document.getElementById('assessmentSuccessView');
  const formView = document.getElementById('assessmentFormView');
  if (successView) successView.classList.add('hidden');
  if (formView) formView.classList.remove('hidden');
  const firstBtn = document.querySelector('.time-sink-btn');
  if (firstBtn) selectTimeSink(firstBtn);
}

function resetContactForm() {
  const form = document.getElementById('contactForm');
  if (form) form.reset();
  const successView = document.getElementById('contactSuccessView');
  const formView = document.getElementById('contactFormView');
  if (successView) successView.classList.add('hidden');
  if (formView) formView.classList.remove('hidden');
}

function updateRoiCalculator() {
  const teamEl = document.getElementById('roiTeamSize');
  const hoursEl = document.getElementById('roiWeeklyHours');
  const rateEl = document.getElementById('roiHourlyRate');
  if (!teamEl || !hoursEl || !rateEl) return;

  const team = parseInt(teamEl.value, 10) || 5;
  const hoursPerPerson = parseFloat(hoursEl.value) || 4;
  const hourlyRate = parseFloat(rateEl.value) || 35;

  document.getElementById('roiTeamDisplay').textContent = `${team} ${team === 1 ? 'person' : 'people'}`;
  document.getElementById('roiHoursDisplay').textContent = `${hoursPerPerson} hrs/wk`;
  document.getElementById('roiRateDisplay').textContent = `$${hourlyRate}/hr`;

  // Assume ~65% of repetitive admin/call/scheduling busywork can be reclaimed via practical AI automation
  const reclaimedWeeklyHours = Math.round(team * hoursPerPerson * 0.65 * 10) / 10;
  const reclaimedMonthlyHours = Math.round(reclaimedWeeklyHours * 4.33);
  const annualSavings = Math.round(reclaimedWeeklyHours * 52 * hourlyRate);

  const weeklyOut = document.getElementById('roiWeeklySaved');
  const monthlyOut = document.getElementById('roiMonthlySaved');
  const annualOut = document.getElementById('roiAnnualSavings');

  if (weeklyOut) weeklyOut.textContent = `${reclaimedWeeklyHours} hrs/wk`;
  if (monthlyOut) monthlyOut.textContent = `${reclaimedMonthlyHours} hrs/mo`;
  if (annualOut) annualOut.textContent = `$${annualSavings.toLocaleString()}/yr`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize default time-sink pill
  const firstBtn = document.querySelector('.time-sink-btn');
  if (firstBtn) {
    selectTimeSink(firstBtn);
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Assessment Form Submission
  const auditForm = document.getElementById('auditForm');
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const business = document.getElementById('business_name')?.value.trim() || 'Your Business';
      const name = document.getElementById('your_name')?.value.trim() || 'Friend';
      const email = document.getElementById('work_email')?.value.trim() || '';
      const industry = document.getElementById('industry')?.value || 'Local Business';
      const teamSize = document.getElementById('team_size')?.value || '1–4 people';
      const priority = document.getElementById('selected_time_sink')?.value || 'Workflow Automation';
      const notes = document.getElementById('workflow_notes')?.value.trim() || '';

      const hoursMap = {
        '1–4 people': '8–14 hrs / week',
        '5–15 people': '15–24 hrs / week',
        '16–50 people': '28–45 hrs / week',
        '50+ people': '50+ hrs / week'
      };

      const headlineEl = document.getElementById('successHeadline');
      if (headlineEl) {
        headlineEl.textContent = `Thanks, ${name.split(' ')[0]}! Your Free AI Audit for ${business} is underway.`;
      }
      const busEl = document.getElementById('summaryBusiness');
      if (busEl) busEl.textContent = `${business} (${industry})`;
      const priEl = document.getElementById('summaryPriority');
      if (priEl) priEl.textContent = priority;
      const hrsEl = document.getElementById('summaryHours');
      if (hrsEl) hrsEl.textContent = hoursMap[teamSize] || '12–20 hrs / week';
      const emEl = document.getElementById('summaryEmail');
      if (emEl) emEl.textContent = email;

      try {
        const existing = JSON.parse(localStorage.getItem('asheville_ai_assessments') || '[]');
        existing.push({
          business,
          name,
          email,
          industry,
          teamSize,
          priority,
          notes,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('asheville_ai_assessments', JSON.stringify(existing));
      } catch (_) {}

      document.getElementById('assessmentFormView')?.classList.add('hidden');
      document.getElementById('assessmentSuccessView')?.classList.remove('hidden');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact_name')?.value.trim() || 'there';
      const email = document.getElementById('contact_email')?.value.trim() || '';
      const subject = document.getElementById('contact_subject')?.value || 'General Inquiry';
      const message = document.getElementById('contact_message')?.value.trim() || '';

      const confirmName = document.getElementById('contactConfirmName');
      if (confirmName) confirmName.textContent = name.split(' ')[0];
      const confirmEmail = document.getElementById('contactConfirmEmail');
      if (confirmEmail) confirmEmail.textContent = email;

      try {
        const existing = JSON.parse(localStorage.getItem('asheville_ai_messages') || '[]');
        existing.push({
          name,
          email,
          subject,
          message,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('asheville_ai_messages', JSON.stringify(existing));
      } catch (_) {}

      document.getElementById('contactFormView')?.classList.add('hidden');
      document.getElementById('contactSuccessView')?.classList.remove('hidden');
    });
  }

  // ROI Calculator sliders
  ['roiTeamSize', 'roiWeeklyHours', 'roiHourlyRate'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateRoiCalculator);
    }
  });
  updateRoiCalculator();

  // FAQ Accordions
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        if (icon) {
          icon.textContent = isHidden ? 'remove' : 'add';
        }
      }
    });
  });
});
