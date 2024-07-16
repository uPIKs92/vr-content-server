// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class MenuState : Schema {
	[Type(0, "map", typeof(MapSchema<User>))]
	public MapSchema<User> users = new MapSchema<User>();

	[Type(1, "map", typeof(MapSchema<Chat>))]
	public MapSchema<Chat> chat = new MapSchema<Chat>();

	[Type(2, "map", typeof(MapSchema<Status>))]
	public MapSchema<Status> status = new MapSchema<Status>();

	[Type(3, "map", typeof(MapSchema<Waktu>))]
	public MapSchema<Waktu> waktu = new MapSchema<Waktu>();

	[Type(4, "map", typeof(MapSchema<Action>))]
	public MapSchema<Action> actions = new MapSchema<Action>();

	[Type(5, "map", typeof(MapSchema<Exercise>))]
	public MapSchema<Exercise> exercise = new MapSchema<Exercise>();

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<MapSchema<User>> __usersChange;
	public Action OnUsersChange(PropertyChangeHandler<MapSchema<User>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.users));
		__usersChange += __handler;
		if (__immediate && this.users != null) { __handler(this.users, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(users));
			__usersChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<MapSchema<Chat>> __chatChange;
	public Action OnChatChange(PropertyChangeHandler<MapSchema<Chat>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.chat));
		__chatChange += __handler;
		if (__immediate && this.chat != null) { __handler(this.chat, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(chat));
			__chatChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<MapSchema<Status>> __statusChange;
	public Action OnStatusChange(PropertyChangeHandler<MapSchema<Status>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.status));
		__statusChange += __handler;
		if (__immediate && this.status != null) { __handler(this.status, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(status));
			__statusChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<MapSchema<Waktu>> __waktuChange;
	public Action OnWaktuChange(PropertyChangeHandler<MapSchema<Waktu>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.waktu));
		__waktuChange += __handler;
		if (__immediate && this.waktu != null) { __handler(this.waktu, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(waktu));
			__waktuChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<MapSchema<Action>> __actionsChange;
	public Action OnActionsChange(PropertyChangeHandler<MapSchema<Action>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.actions));
		__actionsChange += __handler;
		if (__immediate && this.actions != null) { __handler(this.actions, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(actions));
			__actionsChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<MapSchema<Exercise>> __exerciseChange;
	public Action OnExerciseChange(PropertyChangeHandler<MapSchema<Exercise>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.exercise));
		__exerciseChange += __handler;
		if (__immediate && this.exercise != null) { __handler(this.exercise, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(exercise));
			__exerciseChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(users): __usersChange?.Invoke((MapSchema<User>) change.Value, (MapSchema<User>) change.PreviousValue); break;
			case nameof(chat): __chatChange?.Invoke((MapSchema<Chat>) change.Value, (MapSchema<Chat>) change.PreviousValue); break;
			case nameof(status): __statusChange?.Invoke((MapSchema<Status>) change.Value, (MapSchema<Status>) change.PreviousValue); break;
			case nameof(waktu): __waktuChange?.Invoke((MapSchema<Waktu>) change.Value, (MapSchema<Waktu>) change.PreviousValue); break;
			case nameof(actions): __actionsChange?.Invoke((MapSchema<Action>) change.Value, (MapSchema<Action>) change.PreviousValue); break;
			case nameof(exercise): __exerciseChange?.Invoke((MapSchema<Exercise>) change.Value, (MapSchema<Exercise>) change.PreviousValue); break;
			default: break;
		}
	}
}

