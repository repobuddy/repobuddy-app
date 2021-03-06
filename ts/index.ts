import { Probot } from 'probot'
import { checkSuiteRequested } from './checkSuiteRequested'

export = (app: Probot) => {
  app.webhooks.onAny(event => console.info(event.name, event.payload))
  checkSuiteRequested(app)
  app.on('issues.opened', async (context) => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!',
    })
    await context.octokit.issues.createComment(issueComment)
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
