import { Component,DestroyRef,EventEmitter,Input,OnDestroy,OnInit,Output,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormControl,FormGroup, FormArray } from '@angular/forms';
import { Profile } from '../models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit{

  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly destroyRef = inject(DestroyRef);

  protected formGroup!: FormGroup<{
    studentID: FormControl<string>;
    firstname: FormControl<string>;
    lastname: FormControl<string>;
    age: FormControl<number>;
    autobiography: FormControl<string>;
    friends: FormArray<FormControl<string>>;
  }
  >;

  @Input() data?: Profile;
  @Output() readonly dataChange = new EventEmitter<Profile>();

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      studentID: [this.data?.studentID ?? ''],
      firstname: [this.data?.firstname ?? ''],
      lastname: [this.data?.lastname ?? ''],
      age: [this.data?.age ?? 0],
      autobiography: [this.data?.autobiography ?? ''],
      friends: this.fb.array(this.data?.friends ?? ['']),
    });

    this.formGroup.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) =>{
        this.dataChange.emit(this.formGroup.getRawValue());
    });
  }


  protected addFriend(): void{
    this.formGroup.controls['friends'].push(this.fb.control(''));
  }
  protected removeFriend(index: number): void{
    this.formGroup.controls['friends'].removeAt(index);
  }

  protected moveFriend(index: number, shift: -1 | 1): void{
    const { friends } = this.formGroup.controls;
    const newIndex = index+shift;

    const control = friends.at(index);
    friends.removeAt(index);
    friends.insert(newIndex, control);
  }

}



