---
title: Commands
description: K9s CLI arguments and keyboard shortcuts.
---

## CLI Arguments

K9s CLI comes with a few arguments that you can use to launch the tool with different configuration.

```shell
# List all available CLI options
k9s help
# Get info about K9s runtime (logs, configs, etc..)
k9s info
# Run K9s in a given namespace.
k9s -n mycoolns
# Run K9s and launch in pod view via the pod command.
k9s -c pod
# Start K9s in a non default KubeConfig context
k9s --context coolCtx
# Start K9s in readonly mode - with all modification commands disabled
k9s --readonly
```

## Key Bindings

### Keyboard Shortcuts

| Action                                                                          | Keys                                  |
| ------------------------------------------------------------------------------- | ------------------------------------- |
| Show active keyboard mnemonics and help                                         | <kbd>?</kbd>                          |
| Show all available resource aliases                                             | <kbd>Ctrl</kbd>+<kbd>A</kbd>          |
| Bail out of K9s                                                                 | <kbd>:q</kbd> or <kbd>Ctrl</kbd>+<kbd>C</kbd> |
| Bail out of view/command/filter mode                                            | <kbd>Esc</kbd>                        |
| Describe, view, edit, view logs, ...                                            | <kbd>d</kbd> <kbd>v</kbd> <kbd>e</kbd> <kbd>l</kbd> ... |
| Delete a resource (<kbd>Tab</kbd> then <kbd>↵</kbd> to confirm)                 | <kbd>Ctrl</kbd>+<kbd>D</kbd>          |
| Kill a resource (no confirmation, equivalent to `kubectl delete --now`)         | <kbd>Ctrl</kbd>+<kbd>K</kbd>          |

### Command Mode

Press <kbd>:</kbd> to enter command mode, or <kbd>/</kbd> to filter the current view. Type a command and press <kbd>↵</kbd> to run it.

| Command                                       | Description                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------- |
| `:pod` <kbd>↵</kbd>                           | View a resource using its singular, plural, short-name or alias            |
| `:pod ns-x` <kbd>↵</kbd>                      | View a resource in the `ns-x` namespace                                    |
| `:pod /fred` <kbd>↵</kbd>                      | View all pods filtered by `fred`                                          |
| `:pod app=fred,env=dev` <kbd>↵</kbd>          | View all pods with labels matching `app=fred` and `env=dev`                |
| `:pod @ctx1` <kbd>↵</kbd>                      | View all pods in context `ctx1` — switches out your current k9s context!  |
| `/filter` <kbd>↵</kbd>                         | Filter the current view (regex2 supported, e.g. `fred\|blee`)             |
| `/! filter` <kbd>↵</kbd>                       | Inverse regex filter — keep everything that _doesn't_ match               |
| `/-l label-selector` <kbd>↵</kbd>             | Filter the current view by labels                                          |
| `/-f filter` <kbd>↵</kbd>                      | Fuzzy-find a resource within the current view                             |
| `:ctx` <kbd>↵</kbd>                            | View and switch to another Kubernetes context (Pod view)                  |
| `:ctx context-name` <kbd>↵</kbd>              | Switch directly to another context (last used view)                        |
| `:ns` <kbd>↵</kbd>                             | View and switch to another Kubernetes namespace                           |
| `:screendump` or `:sd` <kbd>↵</kbd>           | View all saved resources                                                   |
| `:pulses` or `:pu` <kbd>↵</kbd>               | Launch the Pulses view                                                     |
| `:xray RESOURCE [NAMESPACE]` <kbd>↵</kbd>     | Launch the XRay view (`po`, `svc`, `dp`, `rs`, `sts`, `ds`; namespace optional) |

