export default {
	title: 'Feature',
	name: 'feature',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required().max(20).warning(`Shorter titles are better, especially if there's a video link`)
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			rows: 2,
			validation: Rule => Rule.required()
		},
		{
			title: 'Video URL',
			name: 'videoUrl',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['https']
			})
		}
	]
}
