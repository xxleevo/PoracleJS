module.exports = (client) => {
	client.log.info(`Commando "${client.user.tag}" awaiting for orders!`)
	client.user.setPresence({
		game: {
			name: '100 IV Mons',
			type: "STREAMING"
		},
	})
}