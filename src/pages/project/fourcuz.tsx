import React from 'react'
import fourcuz from '../../assets/images/fourcuz.png'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import '../the-notebook.css'

const FourcuzPage: React.FC = () => {
  // Using a thumbnail service to generate preview image from the website
  // This service creates a screenshot thumbnail of the live site
  const thumbnailUrl = `https://image.thum.io/get/width/1200/crop/600/https://fourcuz.dukerspace.com/`

  return (
    <DefaultLayout>
      <div>
        <div className="notebook-content">
          <article className="notebook-article">
            <h1>Fourcuz</h1>
            <p>
              <strong>Pomodoro Task Manager - Focus + Tasks in a clean, distraction-free web app</strong>
            </p>

            {/* Thumbnail/Preview Image */}
            <div className="my-8 text-center">
              <a
                href="https://fourcuz.dukerspace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={fourcuz}
                  alt="Fourcuz Pomodoro Task Manager Preview"
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-700 hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    // Fallback if thumbnail service fails
                    const target = e.target as HTMLImageElement
                    target.src = 'https://via.placeholder.com/1200x628/1a1a2e/fff?text=Fourcuz+Pomodoro+Task+Manager'
                  }}
                />
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Click image to visit live site: <a
                  href="https://fourcuz.dukerspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://fourcuz.dukerspace.com/
                </a>
              </p>
            </div>

            <h2>About</h2>
            <p>
              Fourcuz is a clean and minimal Pomodoro task manager web application designed to help
              you stay focused and productive. It combines the proven Pomodoro Technique with
              intuitive task management, allowing you to track your work in focused intervals
              without distractions. Your data stays local and private—no signup required.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Pomodoro Timer</strong> - Customizable timer durations with break intervals
                to maintain focus and prevent burnout
              </li>
              <li>
                <strong>Task Management</strong> - Create, edit, and organize tasks with subtasks,
                priorities, and due dates
              </li>
              <li>
                <strong>Statistics & Insights</strong> - Track your productivity with daily,
                weekly, and monthly focus time and task completion statistics
              </li>
              <li>
                <strong>Local Data Storage</strong> - All your data is stored locally in your browser—
                no account needed, complete privacy
              </li>
              <li>
                <strong>Dark/Light Mode</strong> - Toggle between themes for comfortable viewing
                in any lighting condition
              </li>
              <li>
                <strong>Mobile Responsive</strong> - Works seamlessly on desktop, tablet, and
                mobile devices
              </li>
              <li>
                <strong>Offline Support</strong> - Continue working even without an internet connection
              </li>
            </ul>

            <h2>How It Works</h2>
            <ol>
              <li>Create tasks and organize them with priorities and due dates</li>
              <li>Start a Pomodoro timer to focus on a task for a set interval (typically 25 minutes)</li>
              <li>Take a short break between sessions to recharge</li>
              <li>Track your progress with detailed statistics and insights</li>
              <li>Repeat the cycle to maintain consistent productivity</li>
            </ol>

            <h2>Why Use Fourcuz</h2>
            <ul>
              <li>
                <strong>Fight Procrastination</strong> - The Pomodoro Technique helps break work
                into manageable chunks
              </li>
              <li>
                <strong>Stay Focused</strong> - Minimal, distraction-free interface keeps you on task
              </li>
              <li>
                <strong>No Signup Required</strong> - Start using immediately without creating accounts
              </li>
              <li>
                <strong>Privacy First</strong> - Your data never leaves your device
              </li>
              <li>
                <strong>Free Forever</strong> - No subscriptions, no hidden costs
              </li>
            </ul>

            <h2>Technology</h2>
            <p>
              Fourcuz is built as a modern web application using React and optimized for performance.
              It leverages browser localStorage for data persistence and responsive design principles
              for cross-device compatibility.
            </p>

            <div className="mt-8">
              <p>
                <strong>Live Application:</strong>{' '}
                <a
                  href="https://fourcuz.dukerspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://fourcuz.dukerspace.com/
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default FourcuzPage
