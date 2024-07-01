document.addEventListener('DOMContentLoaded', function() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');
  
    function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4]; // Get time in HH:MM:SS format
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
  
      currentTimeElement.textContent = utcTime;
      currentDayElement.textContent = dayOfWeek;
    }
  
    updateTime();
    setInterval(updateTime, 1000); 
  });
  