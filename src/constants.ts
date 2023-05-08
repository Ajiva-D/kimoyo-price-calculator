import type { InputType } from "./types"

export const StudySessionDropdown = [
	{
		id: '30mins',
		label: '30 minutes interview',
		value: '30 minutes study session'
	},
	{
		id: '60mins',
		label: '60 minutes interview',
		value: '30 minutes study session'
	},
	{
		id: '90mins',
		label: '90 minutes interview',
		value: '30 minutes study session'
	}
]

export const StudyStructureDropdown = [
	{
		id: 'onlineStudy',
		label: 'Online study',
		value: 'Online study'
	},
	{
		id: 'face-face-study',
		label: 'face-to-face study',
		value: 'face-to-face study'
	},
]

export const StudyModerationDropdown = [
	{
		id: 'willModerate',
		label: 'I will moderate the sessions',
		value: false
	},
	{
		id: 'kimoyoModerates',
		label: 'Kimoyo moderates',
		value: true
	},
]

export const ProjectGuidesDropdown = [
	{
		id: 'willPrepare',
		label: 'I will prepare my discussion guide',
		value: false
	},
	{
		id: 'needHelpPreparing',
		label: 'I need help preparing discussion guide',
		value: true
	},
]

export const NeedTranscriptsDropdown = [
	{
		id: 'needTranscripts',
		label: 'I will need transcripts',
		value: true
	},
	{
		id: 'dontNeedTranscripts',
		label: 'I don’t need transcripts',
		value: false
	},
]

export const StudyReportDropdown = [
	{
		id: 'needReport',
		label: 'I will need a study report',
		value: true
	},
	{
		id: 'dontNeedReport',
		label: 'I don’t need a study report',
		value: false
	},
]

export const textInputs: InputType[] = [
	{
		label: 'Number of participants',
		placeholder: '00',
		description: 'A minimum of 4 participants is needed for a study',
		modelKey: 'participant'
	},
	{
		label: 'Number of additional participants',
		placeholder: '00',
		description: 'This must be at least 20% of total participants',
		modelKey: 'additionalParticipants'
	}
]

export const selectInputs: InputType[] = [
	{
		label: 'Duration of each study session',
		placeholder: '— Select study session duration',
		description: 'How long will each study session last?',
		modelKey: 'studyDuration',
		dropdown: StudySessionDropdown
	},
	{
		label: 'Study structure',
		placeholder: '— Select study structure',
		description: 'Will this be an online study or physical study?',
		modelKey: 'studyStructure',
		dropdown: StudyStructureDropdown
	},
	{
		label: 'Study moderation',
		placeholder: '— Select study moderation',
		description: 'Do you need help from Kimoyo moderating this study?',
		modelKey: 'studyModeration',
		dropdown: StudyModerationDropdown
	},
	{
		label: 'Project management & discussion guide prep',
		placeholder: '— Select',
		description: 'Do you need help from Kimoyo with a discussion prep?',
		modelKey: 'projectGuides',
		dropdown: ProjectGuidesDropdown
	},
	{
		label: 'Need transcripts from each session?',
		placeholder: '— Select',
		description: 'Do you need help from Kimoyo transcribing each session?',
		modelKey: 'needTranscripts',
		dropdown: NeedTranscriptsDropdown
	},
	{
		label: 'Study report & analysis',
		placeholder: '— Select study report & analysis',
		description: 'Will you need help analyzing this study findings and insights?',
		modelKey: 'studyReport',
		dropdown: StudyReportDropdown
	}
]