// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Exercise : Schema {
	[Type(0, "string")]
	public string student = default(string);

	[Type(1, "string")]
	public string instructor = default(string);

	[Type(2, "string")]
	public string scenario = default(string);

	[Type(3, "string")]
	public string id_exercise = default(string);

	[Type(4, "string")]
	public string training_mode = default(string);

	[Type(5, "string")]
	public string exercise_mode = default(string);

	[Type(6, "boolean")]
	public bool is_vr = default(bool);

	[Type(7, "boolean")]
	public bool is_interupt = default(bool);

	[Type(8, "array", typeof(ArraySchema<string>), "string")]
	public ArraySchema<string> action_list = new ArraySchema<string>();

	[Type(9, "string")]
	public string id_unique_report = default(string);

	[Type(10, "string")]
	public string exercise_name = default(string);

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<string> __studentChange;
	public Action OnStudentChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.student));
		__studentChange += __handler;
		if (__immediate && this.student != default(string)) { __handler(this.student, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(student));
			__studentChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __instructorChange;
	public Action OnInstructorChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.instructor));
		__instructorChange += __handler;
		if (__immediate && this.instructor != default(string)) { __handler(this.instructor, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(instructor));
			__instructorChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __scenarioChange;
	public Action OnScenarioChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.scenario));
		__scenarioChange += __handler;
		if (__immediate && this.scenario != default(string)) { __handler(this.scenario, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(scenario));
			__scenarioChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __id_exerciseChange;
	public Action OnId_exerciseChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_exercise));
		__id_exerciseChange += __handler;
		if (__immediate && this.id_exercise != default(string)) { __handler(this.id_exercise, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_exercise));
			__id_exerciseChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __training_modeChange;
	public Action OnTraining_modeChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.training_mode));
		__training_modeChange += __handler;
		if (__immediate && this.training_mode != default(string)) { __handler(this.training_mode, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(training_mode));
			__training_modeChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __exercise_modeChange;
	public Action OnExercise_modeChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.exercise_mode));
		__exercise_modeChange += __handler;
		if (__immediate && this.exercise_mode != default(string)) { __handler(this.exercise_mode, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(exercise_mode));
			__exercise_modeChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __is_vrChange;
	public Action OnIs_vrChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.is_vr));
		__is_vrChange += __handler;
		if (__immediate && this.is_vr != default(bool)) { __handler(this.is_vr, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(is_vr));
			__is_vrChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __is_interuptChange;
	public Action OnIs_interuptChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.is_interupt));
		__is_interuptChange += __handler;
		if (__immediate && this.is_interupt != default(bool)) { __handler(this.is_interupt, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(is_interupt));
			__is_interuptChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<ArraySchema<string>> __action_listChange;
	public Action OnAction_listChange(PropertyChangeHandler<ArraySchema<string>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.action_list));
		__action_listChange += __handler;
		if (__immediate && this.action_list != null) { __handler(this.action_list, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(action_list));
			__action_listChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __id_unique_reportChange;
	public Action OnId_unique_reportChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_unique_report));
		__id_unique_reportChange += __handler;
		if (__immediate && this.id_unique_report != default(string)) { __handler(this.id_unique_report, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_unique_report));
			__id_unique_reportChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __exercise_nameChange;
	public Action OnExercise_nameChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.exercise_name));
		__exercise_nameChange += __handler;
		if (__immediate && this.exercise_name != default(string)) { __handler(this.exercise_name, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(exercise_name));
			__exercise_nameChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(student): __studentChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(instructor): __instructorChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(scenario): __scenarioChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(id_exercise): __id_exerciseChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(training_mode): __training_modeChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(exercise_mode): __exercise_modeChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(is_vr): __is_vrChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			case nameof(is_interupt): __is_interuptChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			case nameof(action_list): __action_listChange?.Invoke((ArraySchema<string>) change.Value, (ArraySchema<string>) change.PreviousValue); break;
			case nameof(id_unique_report): __id_unique_reportChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(exercise_name): __exercise_nameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			default: break;
		}
	}
}

