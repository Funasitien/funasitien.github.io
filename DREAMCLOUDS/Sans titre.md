```yml
command /prosky [<text>] [<text>] [<text>] [<text>]:
  trigger:
    if arg-1 is "add":
      if arg-3 is set:
        if arg-4 is set:
          set {prosky_ip::arg-2} to arg-3
          set {prosky_port::arg-2} to "25565"
        else:
          set {prosky_ip::arg-2} to arg-3
          set {prosky_port::arg-2} to arg-4
      else:
        prosky("&cYou need to specify a server name and/or an ip adress to register a server!", command sender)
        
    else:
      prosky("Running Prosky version ALPHA 1.2", command sender)

function prosky(message: text, joueur: player):
  send "bruh" to the console
  send "🔥 Prosky - %{_message}%" to {_joueur}
```