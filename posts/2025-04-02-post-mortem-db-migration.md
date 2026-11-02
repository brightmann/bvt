---
title: "Post-mortem: A Backward Incompatible Database Migration"
description: Val runs failed due to a database migration that was not backward compatible
pubDate: 2025-04-02T00:00:00.000Z
author: Sophie Houser
tags: [engineering]
---

Today at 10:11am we experienced a 12-minute outage, which caused HTTP vals to return 503 errors and other types of vals to fail. In the end, the root cause was a deployment timing issue where database migrations were deployed successfully, but our application code deployment hung for several minutes. The new database migrations were incompatible with the old application code and crashed the process. 

We aim to make all database migrations maintain backward compatibility, but in this case, we only discovered through the delayed deployment feedback that the new migrations were not compatible with previous versions.

## Timeline

- **10:11AM ET** - We merged the new migration and application code
- **10:16AM ET** - We got pinged for downtime
- **10:17AM ET** - We posted that HTTP vals are down in the new #service-status channel
- **10:18AM ET** - The new application code deployment was still lagging
- **10:19AM ET** - We rolled back to an earlier deployment on Render, which Render rejected because the earlier migration had succeeded, so the ‘old migration’ check prevented it from entering production.
- **10:22AM ET** - We pushed something we thought could be a fix
- **10:28AM ET** - We notified everyone that we’re back up.

## Impact

- HTTP vals returned 503 errors for ~12 minutes, and all other val types did not run.
- The [val.town](http://val.town) site remained up.

## Next Steps

Reliability is important to us and we’ve taken steps to make sure this doesn’t happen again. We’ve added a test to ensure database migrations are backward compatible, which we’ll run before we deploy any new code that includes database migrations.
